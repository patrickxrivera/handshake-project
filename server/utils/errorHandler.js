const code = require('./statusCodes');

module.exports = (message, req, res, next) => {
  res.status(code.USER_ERROR).send({ error: { message } });
};
