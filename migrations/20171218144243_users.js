
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments()
        table.string('name').notNullable().defaultTo('')
        table.string('avatar').notNullable().defaultTo('')
        table.string('hashed_password').notNullable().defaultTo('')
        table.integer('total_emoji').notNullable().defaultTo(0)
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
