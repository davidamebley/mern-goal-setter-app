const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();

    res.status(200).json(goals);
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
    // Check if Text field has a val
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add some input in the text field')
    }

    const goal = await Goal.create({
        text: req.body.text
    });

    res.status(201).json(goal)
})

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({'message': `Update Goal ${req.params.id}`})
})

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({'message': `Delete Goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}