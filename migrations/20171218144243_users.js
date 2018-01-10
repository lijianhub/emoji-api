
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments()
        table.string('email').notNullable().defaultTo('')
        table.string('avatar').notNullable().defaultTo('')
        // What about timestamps?  :(
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
