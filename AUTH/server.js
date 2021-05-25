const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const plantRouter = require('../PLANTS/plants-router');
const userRouter = require('../USERS/users-router');
const authRouter = require('../AUTH/auth-router');
const restricted = require('../AUTH/restricted');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('.api/user', restricted, userRouter);
server.use('/api/plants', restricted, plantRouter);
server.use(authRouter);

module.exports = server;
