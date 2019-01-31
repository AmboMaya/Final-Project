exports.up = knex =>
  knex.schema.createTable('cardData', t => {
    t.increments('id').primary()
    t.integer('date_id').references('dates.id')
    t.integer('activity_id').references('activities.id')
    t.integer('user_id').references('users.id')
    t.integer('rating')
    t.string('log')
  })

exports.down = knex => knex.schema.dropTable('cardData')
