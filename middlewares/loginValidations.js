const services = require('../services');

const userEmail = (req, res, next) => {
  const { email } = req.body;

  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }

  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }

  next();
};

const userAlreadyExists = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await services.login.getUser(email, password);

  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

const userPassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  next();
};

module.exports = {
  userEmail,
  userAlreadyExists,
  userPassword,
};