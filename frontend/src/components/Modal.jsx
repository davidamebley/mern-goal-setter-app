import { useEffect, useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Modal = ({ showModal, modalData, onClose }) => {
  const [goal, setGoal] = useState(modalData);
  const navigate = useNavigate();
  if (!showModal) return null;

  return (
    <div onClick={onClose} className='modal-overlay'>
      <div onClick={(e) => { e.stopPropagation()}} className='container-modal'>
        <FaTimes className='modal-close' onClick={onClose}>
            Close
        </FaTimes>
        <div className='modal-content'>
          <h2>Update Goal Text</h2>
          <div className="form-group">
                <label htmlFor="text"><b>Goal</b></label>
                <input type="text" name='text' id='text' value={goal} onChange={(e) => setGoal(e.target.value)}/>
            </div>
        </div>
        <div className="modal-buttons">
          <button className="btn modal--button-main">Update</button>
        </div>
      </div>
    </div>
  )
};

export default Modal