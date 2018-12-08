const connection = require('./')
// const dates = require('./dates')

function getDates (userId, startDate, endDate, db = connection) {
  return db('dates')
    .where('user_id', '=', userId)
    .where('created_at', '>=', startDate)
    .where('created_at', '<=', endDate)
    .select()
}

function getCardsPerDate (dateId, db = connection) {
  return db('cardData')
    .where('date_id', '=', dateId)
    .select()
}

function getCards (dateIds, db = connection) {
  return db('cardData')
    // for (date of dateIds) {
    //   .where('date_id', '=', date)
    // }
    
}

function getAllCards (db = connection) {
  return db('cardData')
}

module.exports = {
  getCardsPerDate,
  getDates,
  getCards,
  getAllCards
}
