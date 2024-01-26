var getSong = require('../API/spotify.js');
const path = require('path');
const express = require('express');
const route = express.Router();

// Middleware to parse incoming POST request data
//mistake here needs to add middleware!
route.use(express.urlencoded({ extended: true }));

route.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'start.html'));
});

route.post('/submit', (req, res, next) => {
    const userResponse = req.body.userResponse;
    getSong(userResponse)
    .then(song => {
        console.log(song);
  })
    .catch(error => {
        console.error('Error:', error.message);
  });
    res.sendFile(path.join(__dirname, '..', 'views', 'menu.html'));
});

module.exports = route;
