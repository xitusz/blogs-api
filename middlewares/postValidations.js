const services = require('../services');

const existPost = async (req, res, next) => {
  const { id } = req.params;

  const post = await services.post.getById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  next();
};

const existTitle = (req, res, next) => {
  const { title } = req.body;

  if (!title || title === null) {
    return res.status(400).json({ message: '"title" is required' });
  }
  
  next();
};

const existContent = (req, res, next) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }

  next();
};

const existCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;

  if (!categoryIds) {
    return res.status(400).json({ message: '"categoryIds" is required' });
  }

  next();
};

const userAuthorized = async (req, res, next) => {
  const { id } = req.params;

  const post = await services.post.getById(id);

  if (post.id !== req.user.payload.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};

const existCategory = (req, res, next) => {
  const { categoryIds } = req.body;

  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }

  next();
};

module.exports = {
  existPost,
  existTitle,
  existContent,
  existCategoryIds,
  userAuthorized,
  existCategory,
};
