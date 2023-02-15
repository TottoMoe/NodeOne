// Import from another page
const { sum, add } = require("./helper");
const http = require('http')


const server = http.createServer((req, res) => {
  res.end("hello world from node js undated")
});

server.listen(3000)

const total = sum(10,20);
console.log(total)