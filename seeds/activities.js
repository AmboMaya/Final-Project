exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, mood: '', icon: ''},
        {id: 2, exercise: '', icon: ''},
        {id: 3, diet: '', icon: ''},
        {id: 4, sleep: '', icon: ''},
        {id: 5, meditation: '', icon: ''},
        {id: 6, water: '', icon: ''},
        {id: 7, alcohol: '', icon: ''},
        {id: 8, vice: '', icon: ''}
      ])
    })
}
