exports.seed = knex =>
  knex('dates').del()
    .then(() =>
      knex('dates').insert([
        {id: 1, user_id: 1, created_at: '2018-11-15'},
        {id: 2, user_id: 1, created_at: '2018-11-17'},
        {id: 3, user_id: 1, created_at: '2018-11-21'},
        {id: 4, user_id: 1, created_at: '2018-11-25'},
        {id: 5, user_id: 1, created_at: '2018-12-02'},
        {id: 6, user_id: 1, created_at: '2018-12-03'},
        {id: 7, user_id: 1, created_at: '2018-12-05'},
        {id: 8, user_id: 1, created_at: '2018-12-06'},
        {id: 9, user_id: 1, created_at: '2018-12-07'},
        {id: 10, user_id: 1, created_at: '2018-12-08'}
      ])
    )
