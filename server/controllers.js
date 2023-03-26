const models = require('./models');

const getAll = (req, res) => {
  res.send('hello receipt splitter!');
};

module.exports = {
  getAll
};