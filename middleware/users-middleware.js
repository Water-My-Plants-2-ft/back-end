const User = require('../users/users-model');

const userPayload = (req, res, next) => {
  const { username, password, phonenumber } = req.body;
  if (!username || !password || !phonenumber) {
    res
      .status(400)
      .json({ message: 'username, password, and phonenumber are required' });
  } else {
    next();
  }
};

module.exports = {
  userPayload,
};
