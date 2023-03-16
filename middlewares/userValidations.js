const services = require('../services');

const userDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const userEmail = (req, res, next) => {
  const { email } = req.body;

  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (!email || email.length === 0) {
    return res.status(400).json({ message: '"email" is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

const emailAlreadyExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await services.user.getByEmail({ email });

  if (user) return res.status(409).json({ message: 'User already registered' });

  next();
};

const userPassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  
  next();
};

const userId = async (req, res, next) => {
  const { id } = req.params;

  const userById = await services.user.getById(id);

  if (!userById) return res.status(404).json({ message: 'User does not exist' });

  next();
};

module.exports = {
  userDisplayName,
  userEmail,
  emailAlreadyExists,
  userPassword,
  userId,
};