// @desc Register new User
// @route POST /api/users
// @access Public
const registerUser = (req, res) => {
    res.json({ message: 'Register User'})
}

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = (req, res) => {
    res.json({ message: 'Login User'})
}

// @desc Get User Information
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
    res.json({ message: 'Display current user info'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}