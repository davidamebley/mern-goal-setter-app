import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Modal from './Modal';
import { useState } from 'react';

const GoalItem = ({ goal }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState('');

  const showModalData = () => {
    setModalData(goal)
    setShowModal(true);
  }

  return (
    <>
    <div className='goal'>
        <div className="action-buttons">
            <div className="edit" onClick={()=> {showModalData()}}>
                <FaPencilAlt/>
            </div>
            <div className="delete" onClick={() => dispatch(deleteGoal(goal._id))}>
                <FaTimes />
            </div>
        </div>
        <div>
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
    </div>
    <Modal showModal={showModal} onClose={() => setShowModal(false)} modalData={modalData} />
    </>
  )
}

export default GoalItem