const express = require('express')

const activities = require('../db/activities')

const router = express.Router()

router.get('/', (req, res) => {
  activities.get()
    .then(users => res.status(200).json({
      ok: true,
      users
    }))
    .catch(err => res.status(500).json({
      ok: false,
      error: err.message
    }))
})
