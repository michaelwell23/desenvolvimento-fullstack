const { Router } = require('express');

const { index } = require('../controllers/homeController');
const {
  createForm,
  create,
  list,
  editForm,
  edit,
  remove,
} = require('../controllers/customersController');

const routes = Router();

// HomeController
routes.get('/', index);

// Criando
routes.get('/registrar', createForm);
routes.post('/registrar/criar', create);

// Listando
routes.get('/clientes', list);

// Editando
routes.get('/editar', editForm);
routes.post('/editar/:id', edit);

//Remover
routes.get('/deletar/:id', remove);

module.exports = routes;
