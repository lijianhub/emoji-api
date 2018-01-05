
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'wicket', avatar: '🐕 '},
        {id: 2, email: 'poop', avatar: '💩 ' },
        {id:3, email: 'venablena@gmail.com', avatar: ''}
      ])
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    })
}
