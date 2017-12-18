const userModel = require('../models/userModel.js')

class userController {
    constructor() {}
    static signup(req, res, next) {
        userModel.signup(req.body)
            .then(response => {
                return res.json({message: response})
            }) 
    }
   
}

module.exports = userController