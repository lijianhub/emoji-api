const express = require('express')
const router = express.Router()
const emojiController = require('../controllers/emojiController.js')

router.get('/', emojiController.getAll)
//Get emoji collection for user by id
router.get('/:id', emojiController.getByUser)



module.exports = router