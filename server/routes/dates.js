const express = require('express')
const moment = require('moment')

const cardDb = require('../db/cardData')
const graph = require('../db/graph')
const activities = require('../db/activities')

const router = express.Router()

module.exports = router

// router.post('/', (req, res) => {
//   // req.body required to look like :
//   // {userId: 1, records:{activityId:1, rating: 1, log:'asdfdgfh'}}
//   const {userId, records} = req.body

//   // if (isRecordOkay) {
//   cardData.addDate({user_id: userId})
//     .then(dateId => {
//       for (let rec of records) {
//         rec.date_id = dateId[0]
//         rec.activity_id = rec.activityId
//         delete rec.activityId
//       }

//       cardData.addRecords(records)
//         .then(() => {
//           // res.json(records)
//           res.json({Okay: true, records})
//         })
//         .catch((err) => res.json({Okay: false, error: err.message}))
//     })
//     .catch((err) => res.json({Okay: false, error: err.message}))

//   // }
//   // else {
//   //   res.json({Okay: false, error: 'Data format is not correct'})
//   // }
// })

const addRecords = (record, dateId, date) => {
  record.date_id = dateId
  record.activity_id = record.activityId
  delete record.activityId

  return cardDb.checkRecords(dateId, record.activity_id)
    .then(card => {
      if (!card) {
        // add
        return cardDb.addRecord(record)
      }
      // update
      return cardDb.updateRecord({
        id: card.id,
        ...record
      })
    })
}

router.post('/', (req, res) => {
  // req.body look like :
  // { userId: 1, date: 'YYYY-MM-DD', cardData: { activityId: 1, rating: 1, log: 'asdfdgfh'} }
  const {userId, date, cardData} = req.body

  // check if date data is exist in dates table
  cardDb.checkDate(userId, date)
    .then(existingDate => {
      if (!existingDate) {
        return cardDb.addDate({user_id: userId, date})
      }

      return [existingDate.id]
    })
    .then(([ dateId ]) => addRecords(cardData, dateId))
    .then(() => cardDb.getRecordsForDate(date))
    .then(records => res.status(200).json({Okay: true, records}))
    .catch(err => res.status(500).json({Okay: false, error: err.message}))
})

// Gets all data for graph component
router.get('/graph/:period/:userId/:endDate', (req, res) => {
  const userId = Number(req.params.userId)
  // let endDate = req.params.endDate
  // const period = req.params.period
  let endDate = '2018-12-08'
  // endDate += ' 23:59:59'
  const period = 'month'

  let startDate = moment(endDate).add(-1, period).format('YYYY-MM-DD')
  let chartData = {}

  // get dates data
  graph.getDates(userId, startDate, endDate)
    .then(dates => {
      chartData.labels = dates.map(date => date.date.slice(5, 10))
      chartData.datasets = []

      // get cards data
      graph.getAllCards()
        .then(cards => {
          // loop through activities to add data for each activity
          activities.getActivities()
            .then(acts => {
              acts.map(a => {
                let aObj = {}
                aObj.label = a.name
                aObj.borderColor = a.colour
                aObj.backgroundColor = a.colour
                a.id === 1 ? aObj.borderWidth = 2 : aObj.borderWidth = 1
                aObj.fill = false
                aObj.pointRadius = 1
                aObj.spanGaps = true
                // a.id === 1 ? aObj.hiddenLegend = true : aObj.hiddenLegend = false
                // aObj.showLine = false
                aObj.data = []

                dates.map(date => {
                  // let dataNotExist
                  let [filteredCard] = cards.filter(card => {
                    return card.activity_id === a.id && card.date_id === date.id
                  })
                  if (filteredCard) {
                    aObj.data.push(filteredCard.rating)
                  } else {
                    aObj.data.push(null)
                  }
                })

                chartData.datasets.push(aObj)
              })
              res.status(200).json({
                ok: true, chartData
              })
            })
            .catch(err => res.status(500).json({
              ok: false, error: err.message
            }))
        })
    })
})
