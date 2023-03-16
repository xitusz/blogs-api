const services = require('../services');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await services.category.create({ name });
    
    return res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  const allCategories = await services.category.getAll();

  return res.status(200).json(allCategories);
};

module.exports = {
  create,
  getAll,
};