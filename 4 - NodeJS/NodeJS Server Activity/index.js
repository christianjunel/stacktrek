import { Server } from 'http';
import { readFile } from 'fs/promises';
const PORT = 8000;

const router = async(file, res) => {
    try {
        file = await readFile(file);
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end(file);
    } catch (err) {
        res.writeHead(500);
        res.end(err);
    }
};

const routerJSON = async(file, res) => {
    try {
        file = await readFile(file);
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        res.end(file);
    } catch (err) {
        res.writeHead(500);
        res.end(err);
    }
};

const routerJS = async(file, res) => {
    try {
        file = await readFile(file);
        res.setHeader('Content-Type', 'text/javascript');
        res.writeHead(200);
        res.end(file);
    } catch (err) {
        res.writeHead(500);
        res.end(err);
    }
};

const requestListener = (req, res) => {
    if (req.url === '/home' || req.url === '/') {
        router('routes/home.html', res);
    } else if (req.url === '/about') {
        router('routes/about.html', res);
    } else if (req.url === '/contact') {
        router('routes/contact.html', res);
    } else if (req.url === '/my_contacts') {
        routerJSON('routes/contacts.json', res);
    } else if (req.url === '/details') {
        routerJSON('routes/details.json', res);
    } else if (req.url === '/bio') {
        routerJS('routes/about.js', res);
    } else if (req.url === '/contactjs') {
        routerJS('routes/contact.js', res);
    }else {
        router('routes/404.html', res);
    }
};

const server = new Server(requestListener);

server.listen(PORT, err => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(`Server has started on http://localhost:${PORT}!`);
})