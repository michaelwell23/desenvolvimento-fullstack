const express = require('express');
const path = require('path');

const routes = require('./app/routes');
const db = require('./app/database');

const app = express();

// conexão com banco de dados;
db.connect();

// váriavel de porta
const PORT = process.env.PORT || 8080;

// definição do template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// habilitando o recebimento de envios de dados via post
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

//rotas
app.use((req, res) => {
  res.render('error/error', {
    title: 'App Crud',
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
