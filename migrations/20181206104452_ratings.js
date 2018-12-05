exports.up = knex =>
  knex.schema.createTable('ratings', t => {
    t.increments('id').primary()
    t.integer('log_id').unique()
    t.integer('activity_id').unique()
    t.integer('rating')
    t.string('detail')
  })

exports.down = knex => knex.schema.dropTable('ratings')
