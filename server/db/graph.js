const connection = require('./')

function getDates (userId, startDate, endDate, db = connection) {
  return db('dates')
    .where('user_id', '=', userId)
    .where('created_at', '>=', startDate)
    .where('created_at', '<=', endDate)
    .select()
}

function getAllCards (db = connection) {
  return db('cardData')
}

module.exports = {
  getDates,
  getAllCards
}
