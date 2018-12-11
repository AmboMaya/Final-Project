const jwt = require('jsonwebtoken')

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

}


