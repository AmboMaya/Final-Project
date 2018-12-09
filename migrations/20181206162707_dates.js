exports.up = knex =>
  knex.schema.createTable('dates', t => {
    t.increments('id').primary()
    t.integer('user_id').references('users.id')
    t.date('created_at')
  })

exports.down = knex => knex.schema.dropTable('dates')
