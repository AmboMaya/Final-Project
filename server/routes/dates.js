const express = require('express')
const moment = require('moment')

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

// let f = (dates, cb) => {
//   let cardsPerDate = []
//   dates.forEach(d => {
//     let obj = {date_id: d.id}
//     graph.getCardsPerDate(d.id)
//       .then(cards => {
//         obj.cards = cards
//       })
//       .then()
//     cardsPerDate.push(obj)
//   })
//   cb(cardsPerDate)
// }

// created_at:2018-12-06 21:35:55
router.get('/graph/:userId/:endDate', (req, res) => {
  const userId = Number(req.params.userId)
  // const endDate = req.params.endDate
  let endDate = '2018-12-14'
  endDate += ' 23:59:59'
  const period = 'week'

  let date = moment(endDate)
  let startDate = date.add(-1, period).format('YYYY-MM-DD')

  graph.getDates(userId, startDate, endDate)
    .then(dates => {
      graph.getAllCards()
        .then(cards => {
          // res.json(cards)
          let cardsPerDate = []

          dates.forEach(date => {
            let obj = {date_id: date.id}
            let dateCards = cards.filter((card) => {
              return card.date_id === date.id
            })
            obj.cards = dateCards
            cardsPerDate.push(obj)
          })

          res.json(cardsPerDate)
        })

      /*
      // let cardsPerDate = []
      // dates.forEach(d => {
      //   let obj = {date_id: d.id}
      //   graph.getCardsPerDate(d.id)
      //     .then(cards => {
      //       obj.cards = cards
      //     })
      //     .then()
      //   cardsPerDate.push(obj)
      // })
      //     res.json(cardsPerDate)

      // f(dates, res.json)
      */
    })
})
