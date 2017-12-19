
const db = require('../db/knex.js')

class userModel {
    constructor(){}
    static signup(data){
        return {model: data}
    }
    static getEmoji(){

    }
}

module.exports = userModel