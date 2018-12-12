exports.seed = knex =>
  knex('users').del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          username: 'test',
          email: 'test@example.com',
          // Password is 'password'!
          hash: '$argon2id$v=19$m=65536,t=2,p=1$LetMmwEI1dVQ1dWoYypAdA$hBca2o/SZ+PRP7HtloNSMQzvy7DnyvJygKmR3bW/ltA'
        }
      ])
    )
