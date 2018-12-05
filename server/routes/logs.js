const express = require('express')

const logs = require('../db/logs')

const router = express.Router()

router.get('/', (req, res) => {
  logs.get()
    .then(users => res.status(200).json({
      ok: true,
      users
    }))
    .catch(err => res.status(500).json({
      ok: false,
      error: err.message
    }))
})
