import { connectDatabase } from "./pool.js";
import bodyParser from "body-parser";
import express from "express";
import bcrypt from "bcryptjs";
import { v4  as  uuidv4 } from  'uuid';
import { generateJwt } from "./jwt/jjwtGenerator.js";
import { auth } from "./middleware/auth.js";


const app = express();
const PORT = 8000;
const pool = connectDatabase();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/register', async(req, res) => {
    try {
        const { first_name, last_name, birthdate, profile_picture, email_address, registration_date, user_password, sex, username } = req.body
        const user = await pool.query(`SELECT * FROM users WHERE username = $1`, [username]);

        if (user.rows.length > 0) {
            res.status(401).send("User already exists");
        }

        //Setup Bcrypt for password hashing

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPassword = await bcrypt.hash(user_password, salt);

        const newUser = await pool.query(`INSERT INTO users (first_name, last_name, birthdate, profile_picture, email_address, registration_date, user_password, sex, username, user_id) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *`, [first_name, last_name, birthdate, profile_picture, email_address, registration_date, bcryptPassword, sex, username, uuidv4()]);

        //generate and return the JWT token
        const token = generateJwt(newUser.rows[0])

        res.json({
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
})

app.post('/login', async (req, res) => {
    try {

        //take the username and password from the req.body
        const {
            username,
            password
        } = req.body;

        //Check if the user is not existing
        const user = await pool.query(`SELECT * FROM users WHERE
        username = $1`, [username])

        if (user.rows.length < 0) {
            res.status(401).send("User does not exists")
        }

        //Check if the password matches using bcrypt
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        if (!validPassword) {
            return res.status(401).json("Password or Email is incorrect")
        }

        //generate and return the JWT
        const token = generateJwt(user.rows[0])
        res.json({
            token
        })

    } catch (error) {
        console.error(error.message);
        res.status(500).send({
            msg: "Unauthenticated"
        });
    }
})

// provide the auth middleware
app.get('/verify', auth, (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.error(err.message);
        res.status(500).send({
            msg: "Unauthenticated"
        });
    }
})

pool.connect(err => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`Server has started on http://localhost:${PORT}`);
        })
    }
})