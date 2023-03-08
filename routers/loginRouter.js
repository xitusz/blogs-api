const express = require('express');

const controllers = require('../controllers');
const validations = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  validations.login.userEmail,
  validations.login.userPassword,
  validations.login.userAlreadyExists,
  controllers.login.login,
);

module.exports = router;