
const http = require('http');

const port = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/plain'});
    res.write('Hello, Sever is Running!');
    res.end('Hello, Sever is Running!');
});

server.listen(port,hostName,()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
});

























