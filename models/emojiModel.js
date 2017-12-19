const bcrypt = require('bcrypt')
const db = require('../db/knex.js')

class emojiModel {
    constructor(){}
    static getAll(){
        console.log('i am in the model')
        return db('emoji')
    }
}

module.exports = emojiModel