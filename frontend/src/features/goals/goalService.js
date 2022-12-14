import axios from 'axios';

// The backend API endpoint for goals. Accessing through a proxy
const API_URL = '/api/goals/';

// Create new Goal
const createGoal = async (goalData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`    //Prepend 'Bearer' to the raw token
        }
    }

    const response = await axios.post(API_URL, goalData, config);

    return response.data;
}

// Get User Goal
const getGoals = async (token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`    //Prepend 'Bearer' to the raw token
        }
    }

    const response = await axios.get(API_URL, config);

    return response.data;
}

// Request to Update a Goal
const updateGoal = async (goalId, goalData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`    //Prepend 'Bearer' to the raw token
        }
    }

    const response = await axios.put(API_URL + goalId, {text:goalData}, config);  //path/:id

    return response.data;
}

// Request to Delete a Goal
const deleteGoal = async (goalId, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`    //Prepend 'Bearer' to the raw token
        }
    }

    const response = await axios.delete(API_URL + goalId, config);  //path/:id

    return response.data;
}


const goalService = {
    createGoal,
    getGoals,
    updateGoal,
    deleteGoal
}

export default goalService