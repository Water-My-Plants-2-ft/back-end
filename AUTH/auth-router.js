const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../AUTH/Secrets/index');
const bcrypt = require('bcryptjs');
const User = require('../USERS/users-model');
const {
  checkUsernameAvailable,
  checkUsernameExists,
} = require('../AUTH/auth-middleware');

router.post('/register', checkUsernameAvailable, (req, res, next) => {
  const credentials = req.body;

  if (!credentials.username || !credentials.password || !credentials.phone) {
    res
      .status(400)
      .json({ message: 'a username, password, and phone number are required' });
  } else {
    const hash = bcrypt.hashSync(credentials.password, 8);
    credentials.password = hash;

    User.add(credentials)
      .then((user) => {
        res.status(201).json(user);
      })
      .catch(next);
  }
});

router.post('/login', checkUsernameExists, (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: 'all fields are required' });
  } else {
    const { username, password } = req.body;

    User.findByUsername(username)
      .then((user) => {
        if (user && bcrypt.compareSync(password, user[0].password)) {
          const token = buildToken(user[0]);
          res
            .status(200)
            .json({ message: `welcome, ${user[0].username}`, token });
        } else {
          res.status(401).json({ message: 'invalid credentials' });
        }
      })
      .catch(next);
  }
});

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
  };
  const config = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, JWT_SECRET, config);
}

router.use((err, req, res, next) /*eslint-disable-line*/ => {
  res.status(500).json({
    message: 'Something went wrong in the router',
  });
});

module.exports = router;
