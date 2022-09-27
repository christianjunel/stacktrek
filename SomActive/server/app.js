import express, { application, Router } from "express"
import bodyParser from "body-parser"
import { connectDatabase } from "./pool.js"
import { v4 as uuidv4 } from "uuid"
import { generateJWT } from "./jwt/jwtGenerator.js"
import bcrypt from "bcryptjs"
import { auth } from "./middleware/auth.js"
import cors from "cors"
import multer from "multer"

const app = express();
const pool = connectDatabase();
const PORT = 8000;
const uid = uuidv4();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/img', express.static('public/uploads'))

//multer storage
// the where and name
const storage = multer.diskStorage( {
    destination: (req, file, cb) => {
        cb(null, './public/uploads')
    },

    filename: (req, file, cb) => {
        const uniquePrefix = Date.now()
        cb(null, uniquePrefix + file.fieldname + '.png' )
    }
});
const upload = multer( {storage: storage})

//THE ROUTES

app.get("/", (req, res) => {
    res.send("Welcome to the home page.")
})

app.post('/register', upload.single('my-image'), async (req, res) => {

    const { first_name, last_name, birthdate, email_address, user_password, sex, username, weight_in_kg, height_in_cm, user_reminder_to_self} = req.body

    const user = await pool.query(`
    SELECT * FROM users 
    WHERE username = $1
    `, [username])

    if (user.rows.length > 0) {
        
        res.status(401).send("Username has been taken")
    } else {
        //Setup bcrypt 
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        
        const bcryptPassword = await bcrypt.hash(user_password, salt);

        //confusing - find another way or make it more readable
        const registration = await pool.query(`INSERT INTO users (first_name, last_name, birthdate, email_address, registration_date, user_password, sex, username, user_id, activity, diet) 
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
                RETURNING *`, [first_name, last_name, birthdate, email_address, new Date(), bcryptPassword, sex, username, uid, "1.55", "2"]);

        await pool.query(`
        INSERT INTO bmi_overview (weight_in_kg, height_in_cm, inserted_at, user_id) VALUES
        ($1, $2, $3, $4)
        `, [weight_in_kg, height_in_cm, new Date(), uid]);

        await pool.query(`
        INSERT INTO reminders_to_self (user_reminder_to_self, inserted_at, user_id) VALUES
        ($1, $2, $3)
        `, [user_reminder_to_self, new Date(), uid])

        const token = generateJWT(registration.rows[0])

        res.json({ token })
    }

})

app.post('/login', async (req, res) => {
    try {
        const { username, user_password } = req.body

        const user = await pool.query(`
        SELECT * FROM users 
        WHERE username = $1
        `, [username])

        if (user.rows[0].length < 0) {
            res.status(401).send("Username or password is incorrect")
        }

        const validPassword = await bcrypt.compare(user_password, user.rows[0].user_password)

        if (!validPassword) {
            return res.status(401).json("Password or username is incorrect")
        }

        const token = generateJWT(user.rows[0])
        res.json({ token })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({ msg: error.message });
    }
})

app.get('/profile', auth, async (req, res) => {
    try {
        const info = await pool.query(`
        SELECT first_name, last_name, birthdate, email_address, registration_date, sex, username, bmi_overview.weight_in_kg, bmi_overview.height_in_cm, profile_pictures.image_path, user_reminder_to_self, users.activity, users.diet FROM 
        bmi_overview
        INNER JOIN
        users
        ON 
        users.user_id = bmi_overview.user_id
        INNER JOIN
        profile_pictures
        ON
        users.user_id = profile_pictures.user_id
        INNER JOIN
        reminders_to_self
        ON
        users.user_id = reminders_to_self.user_id
        WHERE bmi_overview.inserted_at = (SELECT MAX (bmi_overview.inserted_at)
        FROM bmi_overview
        WHERE bmi_overview.user_id = $1)
        AND
        reminders_to_self.inserted_at = (SELECT MAX (reminders_to_self.inserted_at) 
        FROM reminders_to_self
        WHERE reminders_to_self.user_id = $1)
        AND
        profile_pictures.inserted_at = (SELECT MAX (profile_pictures.inserted_at) 
        FROM profile_pictures
        WHERE profile_pictures.user_id = $1)
        AND 
        users.user_id = $1
        `, [req.user.user_id])
        console.log(info)
        res.json(info)
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ msg: "Unauthenticated" });

    }
})

app.post('/upload', upload.single('my-image'), async (req, res) => {
    
    const { filename } = req.file

    const newPicture = await pool.query(`
    INSERT INTO profile_pictures (image_path, inserted_at, user_id) VALUES
    ($1, $2, $3)
    `, [filename, new Date(), uid])

    res.json( {msg: "Image uploaded"} )
})

app.get('/workout', auth, async(req, res) => {
    try {
        const workouts = await pool.query(`
            SELECT * FROM workouts;
        `);

        res.json(workouts.rows)
    } catch (error) {
        console.log(error)
    }
})

app.get('/nutrition', auth, async(req, res) => {
    try {
        const nutrition = await pool.query(`
            SELECT * FROM meals;
        `);

        res.json(nutrition.rows)
    } catch (error) {
        console.log(error)
    }
})

app.put('/macroupdate', auth, async (req, res) => {
    try {
        //proper naming convention
        const { passActivity, passDiet } = req.body

        await pool.query(`
        UPDATE users
        SET activity = $1, diet = $2
        WHERE user_id = $3 RETURNING *
        `, [passActivity, passDiet, req.user.user_id])

        res.json("Macro updated");
    } catch (error) {
        console.log(error)
    }
});

app.post('/bmiupdate', auth, async (req, res) => {
    try {
        const { height_in_cm, weight_in_kg } = req.body

        await pool.query(`
        INSERT INTO bmi_overview (weight_in_kg, height_in_cm, inserted_at, user_id)
        VALUES ($1, $2, $3, $4) RETURNING *
        `, [weight_in_kg, height_in_cm, new Date(),req.user.user_id])

        res.json("BMI updated");
    } catch (error) {
        console.log(error)
    }
})

pool.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        app.listen(PORT, () => {
            console.log(`Server has started on http://localhost:${PORT}`)
        })
    }
})
