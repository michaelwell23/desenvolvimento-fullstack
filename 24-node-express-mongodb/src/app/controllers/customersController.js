const CustomersModel = require('../models/customers');
const { crypto } = require('../utils/passwordHash');

const defaultTitle = 'Cadastro de Clientes';

function createForm(req, res) {
  res.render('register', {
    title: 'Registrar Usuário',
  });
}

async function create(req, res) {
  const { name, age, email, password } = req.body;

  const passwordCrypto = await crypto(password);

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  });

  register.save();
  res.render('register', {
    title: defaultTitle,
    message: 'Cadastro realizado com sucesso!',
  });
}

async function list(req, res) {
  const users = await CustomersModel.find();

  res.render('list', {
    title: 'Lista de usuários',
    users,
  });
}

async function editForm(req, res) {
  const { id } = req.query;

  const user = await CustomersModel.findById(id);

  res.render('edit', {
    title: 'Editar Usuário',
    user,
  });
}

async function edit(req, res) {
  const { name, age, email } = req.body;
  const { id } = req.params;

  const user = await CustomersModel.findById(id);

  user.name = name;
  user.age = age;
  user.email = email;

  user.save();

  res.render('edit', {
    title: 'Editar Usuário',
    user,
    message: 'Usuário alterado com sucesso!',
  });
}

async function remove(req, res) {
  const { id } = req.params;

  const remove = await CustomersModel.deleteOne({ _id: id });

  if (remove.ok) {
    res.redirect('/usuarios');
  }
}

module.exports = {
  createForm,
  create,
  list,
  editForm,
  edit,
  remove,
};
