const bcrypt = require('bcrypt')
const db = require('../db/knex.js')

class emojiModel {
    constructor(){}
    static getAll(){
        return db('emoji')
    }        
}

module.exports = emojiModel