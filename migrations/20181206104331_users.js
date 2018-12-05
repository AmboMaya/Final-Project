exports.up = knex =>
  knex.schema.createTable('users', t => {
    t.increments('id').primary()
    t.string('username').unique()
    t.string('email')
    t.string('hash')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('users')
