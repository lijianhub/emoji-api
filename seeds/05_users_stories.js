exports.seed = function(knex, Promise) {
  return knex('users_stories').del()
    .then(function () {
      return knex('users_stories').insert([
        {user_id: 1, story_id: 1},
        {user_id: 1, story_id: 2},
        {user_id: 1, story_id: 4}
      ])
    })
}
