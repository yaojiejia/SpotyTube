const path = require('path');
const express = require('express');
const route = express.Router();


route.get('/display', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'menu.html'));
});

function displayResponses() {
    let input = document.getElementById("userInput").value
    console.log(input) 
}

module.exports = route;