const cors = require('cors')
const path = require('path')
const express = require('express')
const sslRedirect = require('heroku-ssl-redirect')

const auth = require ('./routes/auth')
const users = require('./routes/users')
const dates = require('./routes/dates')
const activities = require('./routes/activities')

const server = express()

server.use(sslRedirect())
server.use(cors())
server.use(express.json())
server.use('/api/v1/auth', auth)
server.use('/api/v1/users', users)
server.use('/api/v1/activities', activities)
server.use('/api/v1/records', dates)
server.use(express.static(path.join(__dirname, './public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
