const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../users/users-model');

const { JWT_SECRET } = require('./secrets');
const jwt = require('jsonwebtoken');

const router = express.Router();
