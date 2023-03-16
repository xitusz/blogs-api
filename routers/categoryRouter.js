const express = require('express');

const controllers = require('../controllers');
const validations = require('../middlewares');
const { authToken } = require('../middlewares');

const router = express.Router();

router.get(
  '/',
  authToken.auth,
  controllers.category.getAll,
);

router.post(
  '/',
  authToken.auth,
  validations.category.categoryName,
  controllers.category.create,
);

module.exports = router;