const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.set('view engine', 'ejs');

// app.use(express.static(path.join(__dirname, 'views')));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Harsh Posts' });
});

app.get('/posts', (req, res) => {
  const data = fs.readFileSync('./store/data.json');

  const posts = JSON.parse(data);

  res.render('posts', {
    title: 'Harsh Posts - Post',
    posts,
  });
});

//FORMULÁRIO
app.get('/criar-posts', (req, res) => {
  const { c } = req.query;
  res.render('criarPosts', { title: 'Harsh Posts', cadastrado: c });
});

// Adicionar Postagens ao arquivo JSON
app.post('/salvar-post', (req, res) => {
  const { name, title, body } = req.body;

  const data = fs.readFileSync('./store/data.json');
  const posts = JSON.parse(data);

  posts.push({
    name,
    title,
    body,
  });

  const postsString = JSON.stringify(posts);

  fs.writeFileSync('./store/data.json', postsString);

  res.redirect('/criar-posts?c=1');
});

//middleware
app.use((req, res) => {
  res.send('<h1>Pagina não encontrada!</h1>');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
