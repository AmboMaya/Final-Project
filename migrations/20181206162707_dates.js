exports.up = knex =>
  knex.schema.createTable('dates', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.date('record_date')
  })

exports.down = knex => knex.schema.dropTable('dates')
