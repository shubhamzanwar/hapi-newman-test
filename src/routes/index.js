const ping = require('./ping');
const users = require('./user');

module.exports = [
    ...ping,
    ...users
];