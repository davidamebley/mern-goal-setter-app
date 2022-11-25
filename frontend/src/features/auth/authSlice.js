import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

// Get User from Local Storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register USer
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) =>{
    try {
        return await authService.register(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);   //return the message as the payload
    }
});

// Logout
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true      //pending means our data is being fetched
        })
        .addCase(register.fulfilled, (state, action) => {  //when we finally receive some data
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {    //if something goes wrong
            state.isLoading = false
            state.isError = true
            state.message = action.payload     //This is the error payload/value we received from the thunkAPI.rejectWithValue(message) above
            state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
    }
});

// Export our reducers, and our main Slice
export const {reset} = authSlice.actions
export default authSlice.reducer