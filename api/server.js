const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const restrict = require('../middleware/restrict');

const authRouter = require('../api/auth/auth-router');
const usersRouter = require('../users/user-router');
const plantsRouter = require('../plants/plants-router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/users', restricted, usersRouter);
server.use('/api/plants', restricted, plantsRouter);
server.use(authRouter);

module.exports = server;
