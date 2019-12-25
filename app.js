const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(req.url,req.method,req.headers);
    // console.log(req);
    // process.exit();
    if(url === '/'){
    res.setHeader('content-type','text/html');
    res.write('<html><body><h1>');
    res.write('Hello</h1>');
    res.write('<form method="POST" action="/message"><input type="text"></input><input type="submit"></input></form>')
    res.write('</body><html>');
    return res.end();
    }
    if(url === '/message' && method ==='POST'){
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html><body><h1>');
    res.write('Welcome .node.js');
    res.write('</h1></body><html>');
    res.end();
})

server.listen(4000);