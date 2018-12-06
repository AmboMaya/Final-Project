const express = require('express')

const users = require('../db/users')

const router = express.Router()

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
  const newUser = {name}
  users
    .createUser(newUser)
    .then(() => {
      res.json({Okay: true})
    })
    .catch((err) => res.json({Okay: false, error: err.message}))
})

module.exports = router
