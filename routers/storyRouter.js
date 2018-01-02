const express = require('express')
const router = express.Router()
const storyController = require('../controllers/storyController.js')

router.get('/', storyController.getAll)
//Get story collection for user by id
router.get('/:id', storyController.getOne)



module.exports = router
