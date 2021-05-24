const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../auth/index');
const checkForUserData = require('../../middleware/users-middleware');
const Users = require('../../users/user-model');

router.post('/register', checkForUserData, (req, res) => {
  let validation = req.body;
  const hash = bcrypt.hashSync(validation.password, 8);
  validation.password = hash;

  Users.add(validation)
    .then((savedUser) => {
      const token = generateToken(savedUser);

      res.status(201).json({ message: 'register success', savedUser, token });
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.user_password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Logged in! Welcome ${user.user_username}!`,
          user_id: user.user_id,
          token,
        });
      } else {
        res.status(401).json({ message: 'Your login is invalid' });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    userId: user.user_id,
    username: user.user_username,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
