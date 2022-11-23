const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')   //Our protect func from our middleware



router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)   //We add the Protect middleware as sec. argument to protect routes

module.exports = router