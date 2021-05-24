// require('dotenv').config()

// const path = require('path')
// const express = require('express')

// const server = require('./api/server')

// const port = process.env.PORT

// server.use(express.static(path.join(__dirname, 'client/dist')))

// server.get('*', (req, res) => {
//   // if you want to serve a SPA using Express you totally can!
//   res.sendFile(path.join(__dirname, 'client/dist', 'index.html'))
// })

// server.listen(port, () => {
//   console.log('listening on ' + port)
// })

require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(` Server listening on port ${PORT}...`);
});
