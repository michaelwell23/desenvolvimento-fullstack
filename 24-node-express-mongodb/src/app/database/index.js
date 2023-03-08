const mongoose = require('mongoose');

// conectando com o mondoDB
function connect() {
  mongoose.connect('mongodb://localhost:27017/');

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Connected to database MongoDB!');
  });
  db.on('error', console.error.bind(console, 'connection error: '));
}

module.exports = { connect };
