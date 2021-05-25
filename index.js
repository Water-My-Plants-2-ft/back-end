require('dotenv').config();

const path = require('path');
const express = require('express');

const server = require('./api/server.js');

const port = process.env.PORT;

server.use(express.static(path.join(__dirname, 'client/dist')));

server.listen(port, () => {
  console.log('listening on ' + port);
});
