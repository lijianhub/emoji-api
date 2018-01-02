const bcrypt = require('bcrypt')
const db = require('../db/knex.js')

class emojiModel {
    constructor(){}
    static getAll(){
        return db('emoji')
    }
    static getByUser(id){
        return db('user_emoji').where({user_id: id})
            .then(results => results.map(result => result.emoji_id))
    }     
}

module.exports = emojiModel