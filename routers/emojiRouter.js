const express = require('express')
const router = express.Router()
const emojiController = require('../controllers/emojiController.js')

router.get('/', emojiController.getAll)
// Use level in url to get emoji from that level


module.exports = router