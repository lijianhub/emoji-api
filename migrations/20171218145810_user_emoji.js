
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_emoji', (table) => {
        table.integer('emoji_id').notNullable()
        table.integer('user_id').notNullable()
        table.foreign('emoji_id').references('emoji.id')
        table.foreign('user_id').references('users.id')
      })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_emoji')
}
