const express = require('express')

const cardData = require('../db/cardData')

const router = express.Router()

module.exports = router

// router.get('/cards', (req, res) => {
//   cardData.getCards()
// })

router.post('/', (req, res) => {
  // req.body must look like :
  // {userId: 1, records:[{activityId:1, rating:1, }]}
  const {userId, records} = req.body

  cardData.addDate({user_id: userId})
    .then(dateId => {
      for (let rec of records) {
        rec.date_id = dateId
        rec.activity_id = rec.activityId
        delete rec.activityId
      }
      res.json(records)
      cardData.addRecords(records)

      // res.json({Okay: id})
    })
    .catch((err) => res.json({Okay: false, error: err.message}))
})
