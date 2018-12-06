const express = require('express')

const cardData = require('../db/cardData')

const router = express.Router()

// router.get('/cards', (req, res) => {
//   cardData.getCards()
// })

router.post('/cards', (req, res) => {
  cardData.addDate()
    .then()
})
