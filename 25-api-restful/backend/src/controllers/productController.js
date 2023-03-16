const Products = require('../models/products');

async function get(req, res) {
  const { id } = req.params;

  const obj = id ? { _id: id } : null;
  const products = await Products.find(obj);

  res.json(products);
}

async function post(req, res) {
  const { name, brand, price } = req.body;

  const product = new Products({
    name,
    brand,
    price,
  });

  await product.save();

  res.json({ name, brand, price, message: 'success' });
}

async function put(req, res) {
  const { id } = req.params;

  // const product =  await Products.findOne({ _id: id})
  // await product.updateOne(req.body);

  const product = await Products.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });

  res.json({
    message: 'success',
    product,
  });
}

async function destroy(req, res) {
  const { id } = req.params;

  await Products.deleteOne({ _id: id });

  res.json({
    message: 'success',
  });
}

module.exports = {
  get,
  post,
  put,
  destroy,
};
