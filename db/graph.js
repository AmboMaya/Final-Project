const connection = require('./')

function get (db = connection) {
  return db('users')
    .join('levels', 'fish.level_id', '=', 'levels.id')
    .select(
      'fish.id as id',
      'fish.name as name',
      'color',
      'level',
      'level_id',
      'method_id',
      'fish.created_at',
      'fish.updated_at'
    )
}

function getById (id, db = connection) {
  return db('fish')
    .join('levels', 'fish.level_id', 'levels.id')
    .leftOuterJoin('methods', 'methods.id', 'method_id')
    .join('fish_details', 'fish.id', 'fish_details.id')
    .where('fish.id', id)
    .select(
      'fish.id as id',
      'fish.name as name',
      'description',
      'level_id',
      'level',
      'color',
      'method_id',
      'method',
      'fish.created_at',
      'fish.updated_at'
    )
}

function createFish (
  newFish,
  fishDetail,
  db = connection
) {
  return db('fish')
    .insert(newFish)
    .then((res) => db('fish_details').insert({
      ...fishDetail,
      fish_id: res[0]
    }))
}

function deleteFish (
  fishId,
  db = connection) {
  return db('fish')
        .where('id', fishId)
        .del()
        // .catch((err) => console.log('fish JS '  + err))
}



module.exports = {
  get,
  getById,
  createFish,
  deleteFish
}