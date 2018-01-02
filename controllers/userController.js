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
        userModel.userExists(req.body.email)
            .then(result => {
                return res.status(200).send(result[0])
            }) 
    }
   static deleteUser(req, res, next) {
       userModel.deleteUser(req.params.id)
        .then(result => {
            return res.status(300).send({message: 'successfully deleted'})
        })
   }
}

module.exports = userController