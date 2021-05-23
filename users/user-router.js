const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('./users-model');
const Plant = require('../plants/plants-model');
const { JWT_SECRET } = require('../auth/secrets/index');

const router = express.Router();
