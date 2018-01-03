
const db = require('../db/knex.js')
const emojiModel = require('./emojiModel.js')

class userModel {
    constructor(){}

    static userExists(email) {
        return db('users').where({email})
            .then(result => result.length ? result : this.newUser(email)) 
    }
    static newUser(email) {
        return db('users').insert({email}).returning('*')  
        }
    static deleteUser(id){
        return db('users').where({id}).del()
    }
    static winEmoji(userId, emojiId) {
        return db('user_emoji').insert({user_id: userId, emoji_id: emojiId})
            .then(whatever => {
                return emojiModel.getByUser(userId)  
            })
    }
}

module.exports = userModel