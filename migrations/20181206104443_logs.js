exports.up = knex =>
  knex.schema.createTable('logs', t => {
    t.increments('id').primary()
    t.integer('user_id').unique()
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('logs')
