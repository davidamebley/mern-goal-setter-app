import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'


const GoalForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createGoal({ text }));
        setText('');
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text"><b>Goal</b></label>
                <input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} required placeholder='What goal do you want to set for yourself?'/>
            </div>
            <div className="form-group">
                <button type='submit' className='btn btn-block'>
                    Add Goal
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm