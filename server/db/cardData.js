const connection = require('./')
const moment = require('moment')

function checkDate (userId, date, db = connection) {
  return db('dates')
    .select()
    .where('date', date)
    .where('user_id', userId)
    .first()
}

function addDate (data, db = connection) {
  return db('dates')
    .insert(data)
    .returning('id')
}

function checkRecords (dateId, actId, uId, db = connection) {
  return db('cardData')
    .select()
    .where('user_id', uId)
    .where('date_id', dateId)
    .where('activity_id', actId)
    .first()
}

function addRecord (record, db = connection) {
  return db('cardData')
    .insert(record)
    .returning('id')
}

function updateRecord (record, db = connection) {
  return db('cardData')
    .where('id', record.id)
    .update(record)
}

function processRecords (records) {
  if (records.length === 0) {
    return records
  }

  const { dateId, date, userId } = records[0]
  const cardData = records.map(
    ({ id, activityId, rating, log }) =>
    ({ id, activityId, rating, log })
  )

  return {
    dateId,
    date: moment(date).format('YYYY-MM-DD'),
    userId,
    cardData
  }
}

// const defaultState = [
//   {
//     dateId: '1',
//     date: '2018-10-01',
//     userId: '1',
//     cardData: [
//       {
//         id: '1',
//         activityId: '5',
//         rating: '5',
//         log: '...'
//       },
//       {
//         id: '2',
//         activityId: '2',
//         rating: '3',
//         log: '...'
//       }
//     ]
//   }
// ]
//
function getRecordsForDate (userId, date, db = connection) {
  return db('dates')
    .join('cardData', 'dates.id', '=', 'cardData.date_id')
    .select(
      'dates.id as dateId',
      'date',
      'dates.user_id as userId',
      'cardData.id as id',
      'activity_id as activityId',
      'rating',
      'log'
    )
    .where({ date, user_id: userId })
    .then(processRecords)
}

module.exports = {
  checkDate,
  addDate,
  checkRecords,
  addRecord,
  updateRecord,
  getRecordsForDate
}
