const express = require("express");
const cors = require("cors");
const engineLogic = require("./engineLogic");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(3000);

app.post("/forward", (req, res) => {
  const message = req.body;
  console.log(req.body);
  engineLogic.forward();
  res.send("Forward");
});

app.post("/backward", (req, res) => {
  const message = req.body;
  console.log(req.body);
  res.send("Backward");
});

app.post("/right", (req, res) => {
  const message = req.body;
  console.log(req.body);
  res.send("Right");
});

app.post("/left", (req, res) => {
  const message = req.body;
  console.log(req.body);
  res.send("Left");
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p>Matvey</p>');
//     res.write('<p>Hello world</p>');
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for 3000 port')
// })
