const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    // Validate input fields
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    // Check if user already exists
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error('A user with the same email already exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    });

    // Check if Successful, then return some User Data
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    // Validate inputs
    if (!email || !password) {
        res.status(400)
        throw new Error('Please fill all fields')
    }

    // Check for User Email
    const user = await User.findOne({email})

    // Compare password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user credentials')
    }
})

// @desc Get Current User Information
// @route GET /api/users/me
// @access Private
const getMe = asyncHandler(async (req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// Generate JWT
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',    // Expires in 30 days
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}