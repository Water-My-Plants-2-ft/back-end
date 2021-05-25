const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const plantsRouter = require('../plants/plants-router');
const usersRouter = require('../USERS/users-router');
const authRouter = require('../AUTH/auth-router');
const restricted = require('../AUTH/restricted');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', restricted, usersRouter);
server.use('/api/plants', restricted, plantsRouter);
server.use(authRouter);

server.use('*', (req, res) => {
  res.json({ api: 'up' });
});

module.exports = server;
