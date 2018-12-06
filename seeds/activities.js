exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(() => {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, name: 'mood', icon: ''},
        {id: 2, name: 'exercise', icon: ''},
        {id: 3, name: 'diet', icon: ''},
        {id: 4, name: 'sleep', icon: ''},
        {id: 5, name: 'meditation', icon: ''},
        {id: 6, name: 'water', icon: ''},
        {id: 7, name: 'alcohol', icon: ''},
        {id: 8, name: 'vice', icon: ''}
      ])
    })
}
