const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
    // console.log(req);
    // process.exit();
})

server.listen(4000);