const http = require('http');
const GCF = require('../my_modules/1/GCF');
const poly = require('../my_modules/3/Polymul');

const requestListener = (req, res) => {
    res.status(200);
    res.end();
};

const PORT = 3000;

http.createServer(requestListener).listen(PORT, err => {
    if(err) {
        console.log(err);
    } else  {
        console.log(`Server running at PORT ${PORT}`);
        console.log(GCF.GCF(15,20));
    }
});