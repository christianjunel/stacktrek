import express from 'express';
import bodyParser from 'body-parser';
import {writeFile} from 'fs/promises';

const PORT = 3000;

const app = express();
const router = express.Router();

const fakeData = [
    {
        name: "CJ",
        age: "20"
    },
    {
        name: "Jen",
        age: "22"
    }
]

const writeLogTxt = async (content) => {
    try {
        await writeFile('log.txt', content, {flag: 'a+'});
    } catch (error) {
        console.log(error);
    }
}

//middleware creation
const logger = (req, res, next) => {

    const date = new Date();
    const pst = date.toLocaleString('en-US', {
    timeZone: 'Asia/Manila',
    timeZoneName: 'long',
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h24',
    });

    res.on('finish', () => {
        writeLogTxt(`${req.ip} accessed ${req.url} with ${req.method} at ${pst} with status code ${res.statusCode}\n\n`);
        console.log(`${req.ip} accessed ${req.url} with ${req.method} at ${pst} with status code ${res.statusCode}`);
      })

    next();
}

//middleware declaration global
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router);

app.set('trust proxy',true); 

app.get('/', logger, (req, res) => {
    res.status(200).send('Welcome to the home page.')
})

app.get('/about', logger, (req, res) => {
    res.status(200).send('This is the about page.')
})

app.get('/contact', logger, (req, res) => {
    res.status(200).send('This is the contact page.')
})

app.post('/data', logger, (req, res) => {
    res.json(fakeData);
})

app.post('/datacheck', logger, (req, res) => {
    const {name} = req.body;
    fakeData.forEach(data => {
        if (data.name === name) {
            res.send('Data exists.')
        }
    })
    // res.json(fakeData);
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, we cannot find this page.');
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}.`)
})
