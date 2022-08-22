import express from 'express';
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}! I'm not doing much yet tho...`);
})