const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/emoji_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

}