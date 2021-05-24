const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../users/users-model');

const { JWT_SECRET } = require('./secrets');
const jwt = require('jsonwebtoken');

const router = express.Router();

const {
  registerPayload,
  usernameAvailability,
  phoneAvailability,
  loginPayload,
  checkUserExists,
} = require('../middleware/user-model');

router.post(
  '/createnewuser',
  registerPayload,
  usernameAvailability,
  phoneAvailability,
  (req, res) => {
    const { username, password, phonenumber } = req.body;
    const hash = bcrypt.hashSync(password, 8);
    User.add({ username, password: hash, phonenumber })
      .then((user) => {
        const token = generateToken(user[0]);
        res
          .status(201)
          .json({ user: user[0], token, message: 'new user created' });
      })
      .catch((err) => res.status(500).json({ message: err.message }));
  }
);

router.post('/login', loginPayload, checkUserExists, (req, res) => {
  const { username, password } = req.body;
  User.getByUsername(username)
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.json({ message: 'login successful', token, user });
      } else {
        res.status(401).json({ message: 'invalid credentials' });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get('/api/auth/logout', (req, res) => {
  res.json({ message: 'thank you!' });
});

function generateToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    lat: Date.now(),
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = router;
