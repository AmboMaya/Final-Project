const connection = require('./')
const dates = require('./dates')

function getGraphDetail (datesId, db = connection) {
  return db('dates')
    .join('cardData', 'dates.id', 'date_id')
    .where('date_id', dates.id)
    .select(
      'dates.id as id',
      'dates.user_id as user_id',
      'activity_id',
      'rating'
    )
    .first()
}
module.exports = {getGraphDetail}
