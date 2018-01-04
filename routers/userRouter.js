const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.post('/', userController.userExists)
router.post('/:id', userController.winEmoji)
router.delete('/:id', userController.deleteUser)

module.exports = router