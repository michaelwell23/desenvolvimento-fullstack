const mongoose = require('mongoose');

function connect() {
  const uri = 'mongodb://localhost:27017/projeto-apirestful';

  mongoose.connect(uri, {
    useNewUrlParser: 'true',
  });

  const db = mongoose.connection;
  db.on('Error', console.error.bind(console, 'erro de conexão:'));
  db.once('open', () =>
    console.log('Conexão com database realisado com sucesso!')
  );
}

module.exports = { connect };
