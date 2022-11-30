import { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { updateGoal } from "../features/goals/goalSlice";

const Modal = ({ showModal, modalData, onClose }) => {
  const goal = modalData;
  const [goalText, setGoalText] = useState(goal.text);
  const dispatch = useDispatch();
  
  const handleInputChange = (e) => {
    setGoalText(e.target.value);
  };

  // const saySomething = () => {
  //   console.log('Saying');
  // }

  useEffect(() => {
    const fetchData = () => {
      setGoalText(goal.text);
    };


    fetchData();
  }, [goal, onClose]);
  

  // Show modal
  if (!showModal || !modalData) return null;

  // if (showModal) setGoalText(modalData.text);

  

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(updateGoal({id: goal._id, text: goalText }));
    setGoalText('');
  }

  return (
    modalData ? (
      <div onClick={onClose} className='modal-overlay'>
      <div onClick={(e) => { e.stopPropagation()}} className='container-modal'>
        <FaTimes className='modal-close' onClick={onClose}>
            Close
        </FaTimes>
        <div className='modal-content'>
          <h2>Update Goal Description</h2>
          <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text"><b>Goal</b></label>
                    <input type="text" name='text' id='text' value={goalText || ''} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>
                        Update Goal
                    </button>
                </div>
            </form>
            <h2>{goalText}</h2>
          </section>
        </div>
      </div>
    </div>
    ) : (
      <Spinner />
    )
  )
};

export default Modal