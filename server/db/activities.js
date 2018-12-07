const connection = require('./')

// function getCards (db = connection) {
//   return db('ratings')
// }

function getActivities (db = connection) {
  return db('activities')
}

module.exports = {
  getActivities
}
