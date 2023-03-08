const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const newUser = await User.create(displayName, email, password, image);

  return newUser;
};

const getByEmail = async (email) => {
  const getEmail = await User.findOne({ where: email });

  return getEmail;
};

const getAll = async () => {
  const allUsers = await User.findAll({ 
    attributes: { exclude: ['password'] },
  });

  return allUsers;
};

const getById = async (id) => {
  const userById = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  return userById;
};

const destroy = async (id) => {
  const userDelete = await User.destroy({ where: { id } });

  return userDelete;
};

module.exports = {
  create,
  getByEmail,
  getAll,
  getById,
  destroy,
};