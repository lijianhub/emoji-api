const express = require('express')
const router = express.Router()
const emojiController = require('../controllers/emojiController.js')

router.get('/', emojiController.getAll)

module.exports = router