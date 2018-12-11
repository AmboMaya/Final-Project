const express = require('express')

const users = require('../db/users')
const hashing = require('../auth/hashing')
const tokens = require('../auth/tokens')

const router = express.Router()

router.post('/login', validateLogin, checkUser, issueToken)
router.post('/register', validateRegistration, createUser, issueToken)
router.use(errorHandler)
router.get('/username', tokens.decode, (req, res) => {
  res.json({
    username: req.user.username
  })
})

function checkUser (req, res, next) {
  const {username, password} = req.body

  users.getByUsername(username)
    .then(user => {
      if (!user) {
        return next(new Error('Unknown user.'))
      }

      const {hash, ...userWithoutHash} = user
      res.locals.user = userWithoutHash
      return hashing.verify(hash, password)
    })
    .then(verified => {
      if (!verified) {
        next(new Error('Password incorrect.'))
      }

      next()
    })
    .catch(err => next(err))
}

function createUser (req, res, next) {
  users.create(req.body)
    .then(user => {
      const {hash, ...userWithoutHash} = user
      res.locals.user = userWithoutHash
      next()
    })
    .catch(err => {
      let message = 'Unknown error while creating user.'
      if (err.message.includes('UNIQUE constraint failed')) {
        message = 'User already exists.'
      }

      next(new Error(message))
    })
}

function errorHandler (err, req, res, next) {
  if (!err) {
    return next()
  }

  res.status(401).json({ok: false, error: err.message})
}

function issueToken (req, res, next) {
  const {id} = res.locals.user

  const token = tokens.create(id)
  res.status(200).json({ok: true, token})
}

function validateLogin (req, res, next) {
  const {username, password} = req.body

  if (!username) {
    return next(new Error('No username provided.'))
  }

  if (!password) {
    return next(new Error('No password provided.'))
  }

  next()
}

function validateRegistration (req, res, next) {
  const {username, password, email} = req.body

  if (!username) {
    return next(new Error('No username provided.'))
  }

  if (!password) {
    return next(new Error('No password provided.'))
  }

  if (!email) {
    return next(new Error('No email provided.'))
  }

  next()
}

module.exports = router
