const { jwt } = require('../middlewares');
const services = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const payload = await services.login.getUser(email, password);

    const token = jwt.jwtSign(payload);

    return res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  login,
};