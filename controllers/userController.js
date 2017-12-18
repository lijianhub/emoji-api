
class userController {
    constructor() {}
    static signup(req, res, next) {
        return res.json({message: 'i am in the controller'})
    }
   
}

module.exports = userController