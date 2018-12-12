const express = require('express')
const verifyJwt = require('express-jwt')

const users = require('../db/users')

const router = express.Router()

router.use(verifyJwt({ secret: process.env.JWT_SECRET }))

router.get('/', (req, res) => {
  users.get()
    .then(users => res.status(200).json({
      ok: true,
      users
    }))
    .catch(err => res.status(500).json({
      ok: false,
      error: err.message
    }))
})

router.post('/', (req, res) => {
  const {username} = req.body
  users
    .createUser(username)
    .then(() => {
      res.json({Okay: true})
    })
    .catch((err) => res.json({Okay: false, error: err.message}))
})

router.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(403).json({ ok: false, message: 'Access denied.' })
  }

  next(err)
})

module.exports = router
