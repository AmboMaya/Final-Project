const express = require('express')

const cardData = require('../db/cardData')
const graph = require('../db/graph')

const router = express.Router()

module.exports = router

// router.get('/cards', (req, res) => {
//   cardData.getCards()
// })

router.post('/', (req, res) => {
  // req.body required to look like :
  // {userId: 1, records:[{activityId:1, rating:1, log:'blah'},{more cards}]}
  const {userId, records} = req.body

  // if (isRecordOkay) {
  cardData.addDate({user_id: userId})
    .then(dateId => {
      for (let rec of records) {
        rec.date_id = dateId[0]
        rec.activity_id = rec.activityId
        delete rec.activityId
      }

      cardData.addRecords(records)
        .then(() => {
          // res.json(records)
          res.json({Okay: true})
        })
        .catch((err) => res.json({Okay: false, error: err.message}))
    })
    .catch((err) => res.json({Okay: false, error: err.message}))

  // }
  // else {
  //   res.json({Okay: false, error: 'Data format is not correct'})
  // }
})

// // Check if records data is in right format
// function checkRecords (records) {
//   let isRecordOkay = true
//   records.forEach(rec => {
//     if (Object.keys(rec).sort() !== ['activityId', 'log', 'rating'] || !rec.activityId) {
//       isRecordOkay = false
//     }
//   })
//   return isRecordOkay
// }


router.get('/graph/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  graph.getGraphDetail(userId)
}