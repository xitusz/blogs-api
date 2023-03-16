const user = require('./userValidations');
const login = require('./loginValidations');
const authToken = require('./auth');
const jwt = require('./jwt');
const category = require('./categoryValidations');
const post = require('./postValidations');

module.exports = {
  user,
  login,
  authToken,
  jwt,
  category,
  post,
};
