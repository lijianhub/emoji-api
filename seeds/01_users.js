
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'wicket', avatar: '🐕 ', hashed_password: '', total_emoji:0 },
        {id: 2, name: 'poop', avatar: '💩 ', hashed_password: '', total_emoji:0 },
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
}

