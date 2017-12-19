
exports.seed = function(knex, Promise) {
  return knex('user_emoji').del()
    .then(function () {
      return knex('user_emoji').insert([
        {user_id: 1, emoji_id: 1},
        {user_id: 1, emoji_id: 2},
        {user_id: 1, emoji_id: 3}
      ])
    })
}
