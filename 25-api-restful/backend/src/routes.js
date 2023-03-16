const { Router } = require('express');

const { get, post, put, destroy } = require('./controllers/productController');

const routes = Router();

routes.get('/produtos/:id?', get);
routes.post('/produtos', post);
routes.put('/produtos/:id', put);
routes.delete('/produtos/:id', destroy);

module.exports = routes;
