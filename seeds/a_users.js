exports.seed = knex =>
  knex('users').del()
    .then(() =>
      knex('users').insert([
        {
          id: 1,
          username: 'Potato Kowhai',
          email: 'potatoKowhai.com',
          // Password is 'password'!
          hash: '$argon2id$v=19$m=8,t=2,p=1$yjmQK3uZ0b7oK7RqIua5Kw$rciYEEnFUlkunk09KIGN1VRVhAzWpXrDbHN+kfcUqjU'
        }
      ])
    )
