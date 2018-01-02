
const db = require('../db/knex.js')

class userModel {
    constructor(){}
    static signup(data){
        return {model: data}
    }
    static userExists(email) {
        return db('users').where({email})
            .then(result => {
                console.log(result, 'in the check...')
                if(!result.length) {
                    this.newUser(email)
                } else {
                    console.log(result[0])
                    return result
                }
            }) 
    }
    static newUser(email) {
        return db('users').insert({email}).returning('*').first()
            .then(res => console.log(res))
    }   
}

module.exports = userModel