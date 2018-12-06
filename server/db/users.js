const connection = require('./')

function get (db = connection) {
  return db('users')
}

function createUser (
  newUser,
  db = connection
) {
  return db('users')
    .insert(newUser)
}

module.exports = {
  get,
  createUser
}
