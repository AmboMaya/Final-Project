const express = require('express')

const activities = require('../db/activities')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  activities.getActivities()
    .then(activity => res.status(200).json({
      ok: true, activity
    }))
    .catch(err => res.status(500).json({
      ok: false, error: err.message
    }))
})
