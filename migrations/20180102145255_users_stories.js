
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_stories', (table) => {
    table.integer('story_id').notNullable()
    table.integer('user_id').notNullable()
    table.foreign('story_id').references('stories.id')
    table.foreign('user_id').references('users.id')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_stories')
};
