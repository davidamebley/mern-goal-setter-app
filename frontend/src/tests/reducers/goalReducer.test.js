import goalSlice, {reset, createGoal, deleteGoal, updateGoal, getGoals} from "../../features/goals/goalSlice";
import { useDispatch } from 'react-redux'
import store from '../../app/store'

// Get User from Local Storage
// const user = JSON.parse(localStorage.getItem('user'));

// const dispatch = useDispatch();

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}
const fakeAction = {
    type: 'testing initial state',
    payload: {}
}

const testGoal = {
    id: "1",
    text: "this is a test goal",
}

const resetAction = {
    type: 'goal/reset',
    payload: testGoal
}

describe('test actions in goalSlice', () => {
    test('if given initial state ', () => {
        /* const state = goalSlice(initialState, resetAction);
        expect(state.length).toBeFalsy(); */
        // store.dispatch(reset(testGoal))
    })

})