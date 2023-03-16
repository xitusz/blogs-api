const services = require('../services');
const { jwt } = require('../middlewares');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const payload = await services.user.create({
      displayName,
      email,
      password,
      image,
    });

    const token = jwt.jwtSign(payload);

    return res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAll = async (_req, res) => {
  const allUsers = await services.user.getAll();

  return res.status(200).json(allUsers);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const userById = await services.user.getById(id);

    res.status(200).json(userById);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const userId = req.user.payload.id;

  await services.user.destroy(userId);

  return res.status(204).end();
};

module.exports = {
  create,
  getAll,
  getById,
  destroy,
};