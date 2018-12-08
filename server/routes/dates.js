const express = require('express')
const moment = require('moment')

const cardData = require('../db/cardData')
const graph = require('../db/graph')
const activities = require('../db/activities')

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


router.get('/graph/:userId/:endDate', (req, res) => {
  const userId = Number(req.params.userId)
  let endDate = req.params.endDate
  // let endDate = '2018-12-14'
  endDate += ' 23:59:59'
  const period = 'week'

  let date = moment(endDate)
  let startDate = date.add(-1, period).format('YYYY-MM-DD')
  let chartData = {}

  // get dates data
  graph.getDates(userId, startDate, endDate)
    .then(dates => {
      // get cards data
      graph.getAllCards()
        .then(cards => {
          let cardsPerDate = []

          // loop through dates data to add cards for each day
          dates.forEach(date => {
            let obj = {date_id: date.id}
            let dateCards = cards.filter((card) => {
              return card.date_id === date.id
            })
            obj.cards = dateCards
            cardsPerDate.push(obj)
          })

          // rearrange the data as graph component wants
          chartData.labels = []
          for (date of dates) {
            chartData.labels.push(date.created_at)
          }
          chartData.datasets = []

          // get activity names
          activities.getActivities()
            .then(actis => {
              for (let a of actis) {
                let aObj = {}
                aObj.label = a.name
                aObj.data = []

                chartData.datasets.push(aObj)
              }

              // loop through the cardsPerDate to get each card data.
              for (let date of cardsPerDate) {
                for (let card of date.cards) {
                  chartData.datasets[card.activity_id - 1].data.push(card.rating)
                }
              }
              res.json(chartData)
            })
        })
    })
})
