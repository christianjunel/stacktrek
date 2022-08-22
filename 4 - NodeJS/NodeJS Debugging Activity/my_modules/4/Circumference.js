const pi = require('./Pi');

const Circumference = (radius) => {
    return 2 * pi.PI * radius;
};

module.exports = Circumference;