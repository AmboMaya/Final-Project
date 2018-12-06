exports.seed = knex =>
  knex('cardData').del()
    .then(() =>
      knex('cardData').insert([
        {date_id: 1, activity_id: 1, rating: 5, log: 'it was good today'},
        {date_id: 1, activity_id: 3, rating: 4, log: ''},
        {date_id: 2, activity_id: 1, rating: 2, log: ''},
        {date_id: 2, activity_id: 2, rating: 3, log: 'Lazy to walk'},
        {date_id: 2, activity_id: 5, rating: 4, log: ''},
        {date_id: 2, activity_id: 6, rating: 1, log: ''},
        {date_id: 2, activity_id: 7, rating: 2, log: 'Fell off the wagon'}

      ])
    )
