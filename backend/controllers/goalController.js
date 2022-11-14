// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({'message': 'Get All Goals'})
}

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    // Check if Text field has a val
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add some input in the text field')
    }
    console.log(req.body)
    res.status(201).json({'message': 'Create A Goal'})
}

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({'message': `Update Goal ${req.params.id}`})
}

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({'message': `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}