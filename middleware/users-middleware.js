const Users = require('../users/user-model');

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

function checkUserData(req, res, next) {
  const newUser = req.body;
  if (!newUser) {
    res.status(404).json({ message: 'user does not exist' });
  } else {
    next();
  }
}

async function validateUser(req, res, next) {
  const { id } = req.params;

  const user = await Users.validUser(id);

  if (!user) {
    res.status(404).json({ message: 'user does not exist' });
  } else {
    next();
  }
}

module.exports = {
  userPayload,
  checkUserData,
  validateUser,
};
