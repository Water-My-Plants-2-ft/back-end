const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./Secrets/index');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'token required',
    });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: 'token invalid',
        });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  }
};
