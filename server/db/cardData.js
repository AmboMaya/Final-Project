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
  
}

module.exports = {
  addDate,
  addRecords
}
