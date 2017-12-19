const emojiModel = require('../models/emojiModel')

class emojiController {
    constructor(){}
    static getAll(req, res, next){
        emojiModel.getAll()
            .then(allEmoji => res.json({results: allEmoji}))
    } 
}

module.exports = emojiController