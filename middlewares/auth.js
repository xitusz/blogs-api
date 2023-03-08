const jwt = require('./jwt');

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const verifyToken = jwt.jwtVerify(authorization);
  
  if (!verifyToken) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  req.user = verifyToken;

  next();
};

module.exports = {
  auth,
};
