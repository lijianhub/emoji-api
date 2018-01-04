
exports.seed = function(knex, Promise) {
  return knex('user_emoji').del()
    .then(function () {
      return knex('user_emoji').insert([
        {user_id: 1, emoji_id: 1},
        {user_id: 1, emoji_id: 2},
        {user_id: 1, emoji_id: 3},
        {user_id: 3, emoji_id: 53},
        {user_id: 3, emoji_id: 12},
        {user_id: 3, emoji_id: 1},
        {user_id: 3, emoji_id: 3},
        {user_id: 3, emoji_id: 6},
        {user_id: 3, emoji_id: 44},
        {user_id: 3, emoji_id: 43},
        {user_id: 3, emoji_id: 41},
        {user_id: 3, emoji_id: 34},
        {user_id: 3, emoji_id: 62},
        {user_id: 3, emoji_id: 51},
        {user_id: 3, emoji_id: 40},
        {user_id: 3, emoji_id: 29},
        {user_id: 3, emoji_id: 37}
      ])
    })
}
