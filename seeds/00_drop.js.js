
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_emoji').del()
    .then(() => knex('emoji').del())
    .then(() => knex('users_stories').del())
    .then(() => knex('stories').del())
    .then(() => knex('users').del())
}
