import express from 'express';
const app = express();
const PORT = 8000;

import {readFile} from 'fs/promises';

const readJSON = async(filename) => {
    try {
        const rawData = await readFile(filename, {encoding: 'utf-8'});
        const data = JSON.parse(rawData);
        return data;
    } catch (error) {
        console.log(error);
    }
};

app.get('/', (req, res) => {
    res.send('This is currently the home page.');
})

app.get('/home', (req, res) => {
    res.send('This is currently the home page.');
})

app.get('/data', (req, res) => {
    readJSON('records.json').then(result => {
        res.send(result)
    });
})

app.get('/search/:id', (req, res) => {
    readJSON('records.json').then(result => {
        if (result[req.params['id'] - 1]) {

            // console.log(req.params.id);
            res.status(200).json(result[req.params['id'] - 1]);
        } else {
            res.status(400).send('Data not found.');
        }
    })
})

app.get('/secret', (req, res) => {
    res.status(403).send('403: Forbidden Page');
})

app.get('*', (req, res) => {
    res.status(404).send('Sorry, we cannot find this page');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}! I'm not doing much yet tho...`);
})