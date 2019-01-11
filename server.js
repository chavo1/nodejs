var env = require(__dirname + '/config.json');
var config;
if (process.env.NODE_ENV === undefined)
  config = env.development;
else
  config = env[process.env.NODE_ENV];

const http = require('http');

const hostname = '192.168.56.56';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});
