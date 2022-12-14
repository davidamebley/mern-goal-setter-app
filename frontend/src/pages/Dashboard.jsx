import {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GoalForm from '../components/GoalForm';
import Spinner from '../components/Spinner';
import { getGoals, reset } from '../features/goals/goalSlice';
import GoalItem from '../components/GoalItem';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const {goals, isLoading, isError, message} = useSelector((state) => state.goals);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset);
    }

  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div className='dashboard' data-testid="dashboard">
      <section className="heading">
        <h1>Welcome, {user && user.name}</h1>
        <p>Dashboard</p>
      </section>
      <GoalForm />

      {/* Display Goals */}
      <section className="content">
        {goals.length > 0 ? (
          <div data-testid="goals" className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>There are no goals to show now. Consider adding some first.</h3>
        )}
      </section>
    </div>
  )
}

export default Dashboard