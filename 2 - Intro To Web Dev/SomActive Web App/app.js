//WITHOUT POSTGRES
// import express from "express";
// import bodyParser from "body-parser";
// const router = express.Router();
// const app = express();

// let users = [
//     {
//         id: 1,
//         username: "cjmoriones",
//         password: "test"
//     },
//     {
//         id: 2,
//         username: "ceejm",
//         password: "testonly"
//     },
//     {
//         id: 3,
//         username: "stacktrek",
//         password: "admin"
//     }
// ]

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/', router);

// //This causes an error as of now as I think I need to make some changes to the directories linking the css/js files.
// app.get('/', (req, res) => {
//     res.sendFile('index.html', { root: '.' });
// })

// app.post('/login', (req, res) => {
//     const { username, password } = req.body
//     users.forEach((user) => {
//         if (user.username === username) {
//             if (user.password === password) {
//                 res.send("Logged in successfully.")
//             }
//             else {
//                 res.send("Incorrect password.")
//             }
//         }
//         else {
//             res.send("User not found")
//         }
//     })
// });

// app.post('/register', (req, res) => {
//     const { username, password } = req.body

//     users.push({
//         id: users.length + 1,
//         username,
//         password
//     })

//     //send updated data
//     res.json(users);
// })

// app.post('/changepassword', (req, res) => {
//     const { id, newPassword } = req.body

//     users.forEach((user) => {
//         //conditional to check if user is existing
//         if (user.id === id) {
//             //passwording chaging
//             user['password'] = newPassword
//             //Just to see that the password has changed
//             res.json(users);
//         }
//         else {
//             res.send("User not found")
//         }
//     })

// })

// //just for checking users
// app.get('/users', (req, res) => {
//     res.json(users);
// });

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     res.json(users[id - 1]);
// })

// app.get('*', (req, res) => {
//     res.status(404).send("Page not found.")
// });

// app.get('/secret', (req, res) => {
//     res.status(403).end();
// })

// app.listen(8000, () => {
//     console.log("server started http://localhost:8000");
// })

//----------------------------------------------------------------
//WITH POSTGRES

import express from "express";
import bodyParser from "body-parser";
import Pool from 'pg';

const router = express.Router();
const app = express();

const pool = new Pool.Pool({
    user: 'postgres',
    password: 'Iamatroll69asd!',
    database: 'somactive',
    host: 'localhost',
    port: 5432
});

// INSERT INTO users (first_name, last_name, birthdate, profile_picture, email_address, registration_date, user_password, sex, username) VALUES ('Christian Junel', 'Milby', '2020-01-01', 'test', 'chrasd@gmail.com', '1900-01-01 00:00:00', 'testonly', 'male', 'cjmoriones');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

//This causes an error as of now as I think I need to make some changes to the directories linking the css/js files.
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
})

app.get('/users', async(req, res) => {
    try {
        const users = await pool.query('SELECT * FROM users');
        res.json(users.rows);
    } catch (error) {
        console.log(error);
    }
})

app.post('/login', async(req, res) => {
    try {
        const { username, password } = req.body
    
        const users = await pool.query('SELECT * FROM users WHERE username = $1 AND user_password = $2', [username, password]);
        const result = users.rows[0];

        if (!result) {
            res.send("Invalid username/password. Please try again.");
        } else {
            res.send("Logged in successfully.");
        }
    } catch (error) {
        console.log(error);
    }
});

app.post('/register', async(req, res) => {
    
    try {
        const { first_name, last_name, birthdate, profile_picture, email_address, registration_date, user_password, sex, username } = req.body

        const users = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        const result = users.rows[0];

        if (!result) {
            const registration = await pool.query(`INSERT INTO users (first_name, last_name, birthdate, profile_picture, email_address, registration_date, user_password, sex, username) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *`, [first_name, last_name, birthdate, profile_picture, email_address, registration_date, user_password, sex, username]);

        res.json(registration.rows);
        } else {
            res.send("This username is already taken.");
        }
    
    } catch (error) {
        console.log(error);
    }
})

app.post('/changepassword', async(req, res) => {    
    try {
        const { id, newPassword } = req.body

        const updatePassword = await pool.query(`
            UPDATE users
            SET user_password = $2
            WHERE user_id = $1
            RETURNING *
        `, [id, newPassword]);

        res.json(updatePassword.rows[0]);
    } catch (error) {
        console.log(error);
    }
})

// app.post('/changepassword', (req, res) => {
//     const { id, newPassword } = req.body

//     users.forEach((user) => {
//         //conditional to check if user is existing
//         if (user.id === id) {
//             //passwording chaging
//             user['password'] = newPassword
//             //Just to see that the password has changed
//             res.json(users);
//         }
//         else {
//             res.send("User not found")
//         }
//     })

// })

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     res.json(users[id - 1]);
// })

app.get('*', (req, res) => {
    res.status(404).send("Page not found.")
});

app.get('/secret', (req, res) => {
    res.status(403).end();
})

app.listen(8000, () => {
    console.log("server started http://localhost:8000");
})