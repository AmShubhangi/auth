// main starting point of the application
const express = require('express');
const http = require('http');
const bodyParse = require('body-parser');
const morgan = require('morgan');
const app = express();

// App Setup
app.use(morgan('combined'));
app.use(bodyParse.json({ type: '*/*' }));

// Server setUp
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("server Listening on :", port);