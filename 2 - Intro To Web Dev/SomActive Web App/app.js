import express from "express";
import bodyParser from "body-parser";
const router = express.Router();
const app = express();

let users = [
    {
        id: 1,
        username: "cjmoriones",
        password: "test"
    },
    {
        id: 2,
        username: "ceejm",
        password: "testonly"
    },
    {
        id: 3,
        username: "stacktrek",
        password: "admin"
    }
]

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

//This causes an error as of now as I think I need to make some changes to the directories linking the css/js files.
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: '.' });
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    users.forEach((user) => {
        if (user.username === username) {
            if (user.password === password) {
                res.send("Logged in successfully.")
            }
            else {
                res.send("Incorrect password.")
            }
        }
        else {
            res.send("User not found")
        }
    })
});

app.post('/register', (req, res) => {
    const { username, password } = req.body

    users.push({
        id: users.length + 1,
        username,
        password
    })

    //send updated data
    res.json(users);
})

app.post('/changepassword', (req, res) => {
    const { id, newPassword } = req.body

    users.forEach((user) => {
        //conditional to check if user is existing
        if (user.id === id) {
            //passwording chaging
            user['password'] = newPassword
            //Just to see that the password has changed
            res.json(users);
        }
        else {
            res.send("User not found")
        }
    })

})

//just for checking users
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.json(users[id - 1]);
})

app.get('*', (req, res) => {
    res.status(404).send("Page not found.")
});

app.get('/secret', (req, res) => {
    res.status(403).end();
})

app.listen(8000, () => {
    console.log("server started http://localhost:8000");
})