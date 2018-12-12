const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

module.exports = {
  create,
  decode
}

function create (userId) {
  return jwt.sign(
    {},
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
      subject: `${userId}`
    }
  )
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDQ1NDUxOTcsImV4cCI6MTU0NTE0OTk5Nywic3ViIjoiMyJ9.ZtVYNG0aRy1LaUoDTG5McPfHal-9ooTxJK6Y5TwUIrI