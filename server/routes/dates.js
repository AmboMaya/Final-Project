const express = require('express')

const cardData = require('../db/cardData')

const router = express.Router()

// router.get('/cards', (req, res) => {
//   cardData.getCards()
// })

router.post('/cards', (req, res) => {
  const {userId, ratings} = req.body

  cardData.addDate({user_id: userId})
    .then(id => {
      console.log(`date id is ${id}`)
    })
})
