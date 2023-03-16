const services = require('../services');

const create = async (_req, _res) => {};

const getAll = async (_req, res) => {
  const allPosts = await services.post.getAll();
  
  res.status(200).json(allPosts);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await services.post.getById(id);

    return res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  await services.post.destroy(id);

  return res.status(204).end();
};

const search = async (req, res) => {
  try {
    const { q } = req.query;

    const post = await services.post.search(q);
  
    return res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, content } = req.body;

    const post = await services.post.update({ id, title, content });

    return res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  destroy,
  search,
  update,
};
