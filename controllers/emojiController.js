const emojiModel = require('../models/emojiModel')

class emojiController {
    constructor(){}
    static getAll(req, res, next){
        emojiModel.getAll()
            .then(allEmoji => res.status(200).json({results: allEmoji}))
    } 
    static getByUser(req, res, next){
        emojiModel.getByUser(req.params.id)
            .then(userEmoji => res.status(200).json({results: userEmoji}))
    }
}

module.exports = emojiController