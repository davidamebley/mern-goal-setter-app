import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  return (
    <>
      {user ? (
        <div>Dashboard</div>
      ) : (
        navigate('login')
      )}
    </>
  )
}

export default Dashboard