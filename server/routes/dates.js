const express = require('express')
const moment = require('moment')

const cardDb = require('../db/cardData')
const graph = require('../db/graph')
const activities = require('../db/activities')

const router = express.Router()

module.exports = router

const addRecords = (record, dateId, date) => {
  record.date_id = dateId
  record.activity_id = record.activityId
  delete record.activityId

  return cardDb.checkRecords(dateId, record.activity_id).then(card => {
    if (!card) {
      return cardDb.addRecord(record)
    }
    return cardDb.updateRecord({
      id: card.id,
      ...record
    })
  })
}

router.post('/', (req, res) => {
  const {userId, date, cardData} = req.body

  cardDb
    .checkDate(userId, date)
    .then(existingDate => {
      if (!existingDate) {
        return cardDb.addDate({user_id: userId, date})
      }
      return [existingDate.id]
    })
    .then(([dateId]) => addRecords(cardData, dateId))
    .then(() => cardDb.getRecordsForDate(userId, date))
    .then(records => res.status(200).json({Okay: true, records}))
    .catch(err => res.status(500).json({Okay: false, error: err.message}))
})

router.get('/cards/:userId/:date', (req, res) => {
  const userId = Number(req.params.userId)
  const date = req.params.date
  console.debug(`Router received date is =${date}`)


  cardDb.getRecordsForDate(userId, date)
    .then(records => res.status(200).json({Okay: true, records}))
    .catch(err => res.status(500).json({Okay: false, error: err.message}))
})

router.get('/stats/:period/:userId/:endDate', (req, res) => {
    console.debug(endDate)

  let {userId, endDate, period} = req.params
  userId = Number(userId)
  let startDate = moment(endDate).add(-1, period).format('YYYY-MM-DD')
  let graphData = {}
  let barData = {}

  graph.getDates(userId, startDate, endDate)
    .then(dates => {
      console.debug(dates)
      graphData = {
        labels: dates.map(date => date.date.slice(5, 10)),
        datasets: []
      }

      graph.getAllCards()
        .then(cards => {
          activities.getActivities()
            .then(acts => {
              barData = {labels: acts.map(a => a.name)}
              let bObj = {
                backgroundColor: [],
                data: [],
                label: 'Activities'
              }

              acts.map(a => {
                let aObj = {
                  label: a.name,
                  borderColor: a.colour,
                  backgroundColor: a.colour,
                  fill: false,
                  pointRadius: 1,
                  spanGaps: true,
                  borderWidth: a.id === 1 ? 2 : 1,
                  hidden: a.id !== 1,
                  data: []
                }

                dates.map(date => {
                  let [filteredCard] = cards.filter(card => card.activity_id === a.id && card.date_id === date.id)
                  filteredCard ? aObj.data.push(filteredCard.rating) : aObj.data.push(null)
                })
                graphData.datasets = [...graphData.datasets, aObj]

                let sum = 0
                let count = 0
                aObj.data.map(rating => {
                  if (rating) {
                    sum += rating
                    count++
                  }
                })
                bObj.data.push(sum / count)
                bObj.backgroundColor.push(a.colour)
              })
              barData.datasets = [bObj]

              res.status(200).json({ok: true, chartData: {graphData, barData}})
            })
            .catch(err => res.status(500).json({ok: false, error: err.message}))
        })
        .catch(err =>
          res.status(500).json({ok: false, error: err.message})
        )
    })
})
