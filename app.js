// Import from another page
// const { sum, add } = require("./helper");

//******HTTP server **********/
// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end("hello world from node js undated")
// });

// server.listen(3000)


//******Express server ********* */
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send("Hey whats up from express")
})

app.listen(3000)