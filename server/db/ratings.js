const connection = require('./')

function get (db = connection) {
  return db('ratings')
}

function addRating (db = connection) {

}

module.exports = {
  get,
  addRating
}
