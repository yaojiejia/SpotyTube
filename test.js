var getSong = require('./spotify.js');
getSong()
  .then(song => {
    console.log(song);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });