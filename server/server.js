const cors = require('cors')
const path = require('path')
const express = require('express')

// const users = require('./routes/users')

const server = express()

server.use(cors())
server.use(express.json())
// server.use('/api/v1/users', users)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
