const express = require('express');

const controllers = require('../controllers');
const validations = require('../middlewares');
const { authToken } = require('../middlewares');

const router = express.Router();

/*
router.post(
  '/',
  authToken.auth,
  validations.post.existTitle,
  validations.post.existContent,
  validations.post.existCategoryIds,
  controllers.post.create
);
*/

router.get(
  '/search',
  authToken.auth,
  controllers.post.search,
);

router.get(
  '/',
  authToken.auth,
  controllers.post.getAll,
);

router.get(
  '/:id',
  authToken.auth,
  validations.post.existPost,
  controllers.post.getById,
);

router.put(
  '/:id',
  authToken.auth,
  validations.post.userAuthorized,
  validations.post.existTitle,
  validations.post.existContent,
  validations.post.existCategory,
  controllers.post.update,
);

router.delete(
  '/:id',
  authToken.auth,
  validations.post.existPost,
  validations.post.userAuthorized,
  controllers.post.destroy,
);

module.exports = router;