const connection = require('./')

// function getCards (db = connection) {
//   return db('ratings')
// }

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
  addDate,
  addRecords
}
