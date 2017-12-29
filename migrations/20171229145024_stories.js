
exports.up = function(knex, Promise) {
    return knex.schema.createTable('stories', (table) => {
        table.increments()
        table.text('story').notNullable().defaultTo('')
      })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stories')
}
