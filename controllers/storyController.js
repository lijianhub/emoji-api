const storyModel = require('../models/storyModel')

class storyController {
    constructor(){}
    static getAll(req, res, next){
        storyModel.getAll()
            .then(allStories => res.status(200).json({results: allStories}))
    }
    static getByUser(req, res, next){
        storyModel.getByUser(req.params.id)
            .then(userStories => res.status(200).json({results: userStories}))
    }
}

module.exports = storyController
