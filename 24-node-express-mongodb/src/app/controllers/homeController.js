function index(req, res) {
  res.render('index', {
    title: 'App Crud',
  });
}

module.exports = {
  index,
};
