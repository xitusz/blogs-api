const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSign = (payload) => {
  try {
    const token = jwt.sign({ payload }, JWT_SECRET, jwtConfig);
  
    return token;
  } catch (err) { 
    return err.message;
  }
};

const jwtVerify = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    return decoded;
  } catch (err) {
    return false;
  }
};

module.exports = {
  jwtSign,
  jwtVerify,
};