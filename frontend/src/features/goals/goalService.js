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

const goalService = {
    createGoal,
    getGoals
}

export default goalService