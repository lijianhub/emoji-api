const userModel = require('../models/userModel.js')

class userController {
    constructor() {}
    static signup(req, res, next) {
        userModel.signup(req.body)
            .then(response => {
                return res.json({message: response})
            }) 
    }
    static userExists(req, res, next) {
        console.log(req.body, 'this is the userController')
        return res.json('hekfsjkdfjdskjfhdskfsd').status(200)
    }
   
}

module.exports = userController