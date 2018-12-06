exports.seed = knex =>
  knex('cardData').del()
    .then(() =>
      knex('cardData').insert([
        {date_id: 1, activity_id: 1, rating: 5, detail: 'it was good today'},
        {date_id: 1, activity_id: 3, rating: 4, detail: ''},
        {date_id: 2, activity_id: 1, rating: 2, detail: ''},
        {date_id: 2, activity_id: 2, rating: 3, detail: 'Lazy to walk'},
        {date_id: 2, activity_id: 5, rating: 4, detail: ''},
        {date_id: 2, activity_id: 6, rating: 1, detail: ''},
        {date_id: 2, activity_id: 7, rating: 2, detail: 'Fell off the wagon'}

      ])
    )
