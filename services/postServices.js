const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const create = async () => {};

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  return allPosts;
};

const getById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  
  return post;
};

const destroy = async (id) => {
  const post = await BlogPost.findOne({ where: { id } });

  await post.destroy();

  return post;
};

const search = async (query) => {
  const post = await BlogPost.findAll({
    where: { [Op.or]:
        [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
    },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    }, {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  return post;
};

const update = async ({ id, title, content }) => {
  await BlogPost.update({
    title,
    content,
  }, {
    where: { id },
  });

  const post = await BlogPost.findOne({
    where: { id },
    include: [{
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  });

  return post;
};

module.exports = {
  create,
  getAll,
  getById,
  destroy,
  search,
  update,
};
