const {server} = require('./server');

server.start().then(() => console.log("server started"));