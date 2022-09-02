import bodyParser from "body-parser";
import express from 'express';
import {v4 as uuidv4} from 'uuid';
import {readFile, writeFile} from 'fs/promises';
import e from "express";

const app = express();
const router = express.Router();
const PORT = 8000;

let userData = {};
let petData = {};
let validPets = ['Cat', 'Dog', 'Bear']

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

const writeJSON = async(someObject, filename) => {
    try {
        const content = JSON.stringify(someObject);
        await writeFile(filename, content, {flag: 'w+'});
    } catch (e) {
        console.log({name: e.name, message: e.message});
    }
};

const readJSON = async(filename) => {
    try {
        const rawData = await readFile(filename, {encoding: 'utf-8'});
        const data = JSON.parse(rawData);
        return data;
    } catch (error) {
        console.log(error);
    }
};

router.get('/', (req, res) => {
    res.send('Welcome to the homepage.');
})

router.post('/api/user/new', (req, res) => {
    
    userData['id'] = uuidv4();
    userData['username'] = req.body.username;
    userData['roles'] = '';
    readJSON('users.json').then(result => {
        let user = result.find(userName => userName.username === req.body.username);
        
        if (user) {
            res.status(400).json({"msg": "username already exists"})
        } else { 
            let writeToJSON = result;
            writeToJSON.push(userData);
            writeJSON(writeToJSON, 'users.json');
            res.status(200).json(userData);
        }
    });
})

router.get('/api/user/:id', (req, res) => {
    readJSON('users.json').then(result => {
        let user = result.find(data => data.id === req.params['id']);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).send('Data not found.');
        }
    })
})

router.delete('/api/user/delete/:id', (req, res) => {
    
    readJSON('users.json').then(result => {
        
        let user = result.filter(data => data.id !== req.params['id']);
        let checker = result.length;
        if (user.length !== checker) {
            writeJSON(user, 'users.json');
            res.status(200).send(`user with id ${req.params.id} has been deleted.`);
        } else { 
            res.status(400).json({"msg": "user does not exists"})
        }
    });
})

//input admin username's id to successfully do this API's PUT method
//will use req.body data to fetch username and what roles to assign them.
router.put('/api/user/role/:id', (req, res) => {
    
    readJSON('users.json').then(result => {
        
        let user = result.find(userName => userName.id === req.params.id);
        if (user) {
            if (user.roles === 'admin') {
                result.forEach(test => {
                    if (test.username === req.body.username) {
                        test.roles = req.body.roles;
                    }
                })
                writeJSON(result, 'users.json');
                res.status(200).json(result);
            } else { 
                res.status(400).json({"msg": "user is not an admin."})
            }
        } else {
            res.status(400).json({"msg": "user not found."})
        }
    });
})

router.get('/api/pet/', (req, res) => {
    readJSON('pets.json').then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).json([]);
        }
    })
})

router.get('/api/pet/:id', (req, res) => {
    readJSON('pets.json').then(result => {
        let pet = result.find(data => data.id === req.params['id']);
        if (pet) {
            res.status(200).json(pet);
        } else {
            res.status(400).send('Data not found.');
        }
    })
})

router.post('/api/pet/new', (req, res) => {

    const {userID, petName, petType} = req.body;
    
    petData['id'] = uuidv4();
    petData['userID'] = userID;
    petData['name'] = petName;
    petData['type'] = petType;
    readJSON('users.json').then(result => {
        let user = result.find(userName => userName.id === userID);
        
        if (user) {
            readJSON('pets.json').then(pets => {
                if (validPets.includes(petType)) {
                    let writeToJSON = pets;
                    writeToJSON.push(petData);
                    writeJSON(writeToJSON, 'pets.json');
                    //display inserted pet
                    res.status(200).json(petData);
                } else {
                    res.status(400).json({"msg": "pet type not valid"})
                }
            })
        } else { 
            res.status(400).json({"msg": "user doesn't exists"})
            
        }
    });
})

router.get('*', (req, res) => {
    res.status(404).send('Sorry, we cannot find this page.');
})

app.listen(8000, () => console.log('Listening at port 8000'));
