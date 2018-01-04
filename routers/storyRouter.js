const express = require('express')
const router = express.Router()
const storyController = require('../controllers/storyController.js')

router.get('/', storyController.getAll)
//Get story collection for user by id
router.get('/users/:id', storyController.getByUser)
//Add story to usercollect after user wins
router.post('/users/:id', storyController.addStory)

module.exports = router
