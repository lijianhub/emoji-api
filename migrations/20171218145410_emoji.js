
exports.up = function(knex, Promise) {
    return knex.schema.createTable('emoji', (table) => {
        table.increments()
        table.string('name').notNullable().defaultTo('')
        table.string('image').notNullable().defaultTo('')
        table.integer('level').notNullable().defaultTo('1')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('emoji')
}
