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
