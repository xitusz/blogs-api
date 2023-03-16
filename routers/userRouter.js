const express = require('express');

const controllers = require('../controllers');
const validations = require('../middlewares');
const { authToken } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  validations.user.userDisplayName,
  validations.user.userEmail,
  validations.user.emailAlreadyExists,
  validations.user.userPassword,
  controllers.user.create,
);

router.get(
  '/',
  authToken.auth,
  controllers.user.getAll,
);

router.get(
  '/:id',
  authToken.auth,
  validations.user.userId,
  controllers.user.getById,
);

router.delete(
  '/me',
  authToken.auth,
  controllers.user.destroy,
);

module.exports = router;