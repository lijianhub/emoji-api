const userModel = require('../models/userModel.js')

class userController {
    constructor() {}
    static userExists(req, res, next) {
        userModel.userExists(req.body.email)
            .then(result => {
                return res.status(200).send(result[0])
            }) 
    }
   static deleteUser(req, res, next) {
       userModel.deleteUser(req.params.id)
        .then(result => {
            return res.status(202).send({message: 'successfully deleted'})
        })
   }
   static winEmoji (req, res, next) {
       userModel.winEmoji(req.params.id, req.body.emoji_id)
        .then(userCollection => {
            return res.status(201).send({result:userCollection})
        }) 
   }
}

module.exports = userController