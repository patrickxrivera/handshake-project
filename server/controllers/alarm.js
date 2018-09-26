const errorHandler = require('../utils/errorHandler');

const create = (AlarmModel) => async (req, res, next) => {
  res.send({ hello: 'world' });
};

const get = (AlarmModel) => async (req, res, next) => {
  res.send({ hello: 'world' });
};

module.exports = {
  create,
  get
};
