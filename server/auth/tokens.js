const jwt = require('jsonwebtoken')

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

module.exports = {
  create
}
