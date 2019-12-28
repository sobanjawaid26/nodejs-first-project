const routes = require('./routes.js');
const http = require('http');

const server = http.createServer(routes.handler);
console.log(routes.someText);

server.listen(4000);