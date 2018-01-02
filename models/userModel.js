
const db = require('../db/knex.js')

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
}

module.exports = userModel