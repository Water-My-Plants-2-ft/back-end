const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../auth/secrets');

module.exports = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'token required' });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: 'token invalid' });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  }
};