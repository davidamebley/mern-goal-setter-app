const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id });

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
        text: req.body.text,
        user: req.user.id       //This attaches a user to every goal
    });

    res.status(201).json(goal)
})

// @desc Update a goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Server: Goal not found for Update operation')
    }

    // Check for User
    if (!req.user) {
        res.status(401)
        throw new Error('Server: User not found for Update operation')
    }

    // Make sure logged in user matches the goal owner/user
    if (goal.user.toString() !==req.user.id) {
        res.status(401)
        throw new Error('Server: User not authorized for Update operation')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    // console.log('Trying to delete goal of id ',req.goal.id)

    if (!goal) {
        res.status(400)
        throw new Error('Server: Goal not found for Delete operation')
    }

    // Check for User
    if (!req.user) {
        res.status(400)
        throw new Error('Server: User not found for Delete operation')
    }

    // Make sure logged in user matches the goal owner/user
    if (goal.user.toString() !==req.user.id) {
        res.status(401)
        throw new Error('Server: User not authorized for Delete operation')
    }

    await goal.remove()     // Delete item

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}