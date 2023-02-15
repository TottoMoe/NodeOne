// Import from another page
// const { sum, add } = require("./helper");

//******HTTP server **********/
// const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end("hello world from node js undated")
// });

// server.listen(3000)

//******Express server ********* */
// const express = require('express');
// const app = express()

// app.get('/', (req, res) => {
//   res.send("Hey whats up from express")
// })

// app.listen(3000)

//*********fs file system********* */
const fs = require("fs");
const fileName = "target.txt";

// fs.watch(fileName, () => console.log(`File changed!`));

//*******Synchronous****** */
// const data = fs.readFileSync(fileName);
// console.log(data.toString());

//*******Asynchronous**** */
const errHandler = err => console.log(err);
const dataHandler = data => console.log(data.toString());

fs.readFile(fileName, (err, data) => {
  if (err) errHandler(err);
  dataHandler(data);
});


console.log("Node js async programming...?");
