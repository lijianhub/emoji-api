const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.post('/', userController.userExists)
router.post('/:id', userController.winEmoji)
router.delete('/:id', userController.deleteUser)
// For changing userInfo, right now it just changes the avater
router.put('/:id', userController.updateInfo)

module.exports = router