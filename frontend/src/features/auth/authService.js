// For making http requests and setting in the data in local storage
import axios from 'axios';

// The backend API endpoint for users
const API_URL = '/api/users/';

// Register User
const register = async (userData) => {
    // The data we want to send thr axios via POST method
    const response = await axios.post(API_URL, userData);
    // Axios returns some response to us in a response.data object
    if (response.data) {
        // We set our local storage with some string data called 'user'
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Login User
const login = async (userData) => {
    // The data we want to send thr axios via POST method
    const response = await axios.post(API_URL + 'login', userData);
    // Axios returns some response to us in a response.data object
    if (response.data) {
        // We set our local storage with some string data called 'user'
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
}

// Logout user
const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout,
    login
}

export default authService;