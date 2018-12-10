const connection = require('./')

function checkDate (userId, date, db = connection) {
  return db('dates')
    .select()
    .where('date', date)
    .where('user_id', userId)
}

function addDate (data, db = connection) {
  return db('dates')
    .insert(data)
    .returning('id')
}

function checkRecords (dateId, actId, db = connection) {
  return db('cardData')
    .select()
    .where('date_id', dateId)
    .where('activity_id', actId)
}

function addRecord (record, db = connection) {
  return db('cardData')
    .insert(record)
    .returning()
}

function updateRecord (record, db = connection) {
  return db('cardData')
    .where('id', record.id)
    .update(record)
}

module.exports = {
  checkDate,
  addDate,
  checkRecords,
  addRecord,
  updateRecord
}
