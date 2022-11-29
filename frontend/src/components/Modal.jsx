import { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Modal = ({ showModal, modalData, onClose }) => {
  console.log('Initially, goal: ', modalData.text);
  const [goal, setGoal] = useState('');
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
      setGoal(e.target.value);
  };
  

  if (!showModal) return null;

  

  const onSubmit = (e) => {
    e.preventDefault();


  }

  return (
    showModal && (
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
                    <input type="text" name='text' id='text' value={showModal && goal} onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <button type='submit' className='btn btn-block'>
                        Update Goal
                    </button>
                </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    )
  )
};

export default Modal