const path = require('path');
const http = require('http');
const express = require('express');
const app = express();
const startRoute = require('./routes/start.js');
const displayRoute = require('./routes/display.js');
app.use(express.static(path.join(__dirname, 'public')));
app.use(startRoute);
app.use(displayRoute);
const server = http.createServer(app);
server.listen(8000);