exports.seed = knex =>
  knex('ratings').del()
    .then(() =>
      knex('ratings').insert([
        {log_id: 1, activity_id: 1, rating: 5, detail: 'it was good today'},
        {log_id: 1, activity_id: 3, rating: 4, detail: ''},
        {log_id: 2, activity_id: 1, rating: 2, detail: ''},
        {log_id: 2, activity_id: 2, rating: 3, detail: 'Lazy to walk'},
        {log_id: 2, activity_id: 5, rating: 4, detail: ''},
        {log_id: 2, activity_id: 6, rating: 1, detail: ''},
        {log_id: 2, activity_id: 7, rating: 2, detail: 'Fell off the wagon'}

      ])
    )
