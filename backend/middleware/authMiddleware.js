const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) =>{
    let token

    // In the HTTP header, there is an authorization object. Check if http header contains authorization and has a Bearer token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1]     // we split {Bearer token} and retrieve 'token' value
            
            // Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get User from the Token
            req.user = await User.findById(decoded.id).select('-password')  //Exclude password from the returned user data
            
            next()      //call the next piece of middleware
        } catch (error) {
            console.log(error)
            res.status(401)     //Not authorized
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
});

module.exports = { protect }