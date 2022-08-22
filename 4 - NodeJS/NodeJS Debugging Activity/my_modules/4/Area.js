const pi = require('./Pi');

const Area = radius => {
    return pi.PI * (radius**2);
};

module.exports = Area;