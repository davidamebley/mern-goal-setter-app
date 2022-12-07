import authSlice from "../../features/auth/authSlice";

// Get User from Local Storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
const fakeAction = {
    type: 'testing initial state',
    payload: {}
}

describe('test actions in authSlice', () => {
    test('if given initial state ', () => {
        const state = authSlice(initialState, fakeAction);
        expect(state.length).toBeFalsy();
    })
})