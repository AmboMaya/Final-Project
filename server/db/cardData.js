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

function addRecords (records, db = connection) {
  return db('cardData')
    .insert(records)
}

module.exports = {
  checkDate,
  addDate,
  addRecords
}
