exports.up = knex =>
  knex.schema.createTable('ratings', t => {
    t.increments('id').primary()
    t.integer('log_id').references('logs.id')
    t.integer('activity_id').references('activities.id')
    t.integer('rating')
    t.string('detail')
  })

exports.down = knex => knex.schema.dropTable('ratings')
