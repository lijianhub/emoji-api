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
    static addStory(req, res, next){
        console.log(req.body)
        storyModel.addStory(req.params.id, req.body.story_id)
            .then(newStoryId => res.status(200).json({results: newStoryId}))
    }
}

module.exports = storyController
