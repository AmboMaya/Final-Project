exports.up = knex =>
  knex.schema.createTable('activities', t => {
    t.increments('id').primary()
    t.string('name').unique()
    t.string('icon')
  })

exports.down = knex => knex.schema.dropTable('activities')
