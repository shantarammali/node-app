const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');   
    console.log('Server is running on port 3000');
    console.log('Request received');
    console.log('Response sent');
    console.log('Server is running on port 3000');
    console.log('Request received');
    console.log('Response sent');
 }
)
const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running on port 3000');
});