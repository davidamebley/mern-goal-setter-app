import { useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Modal = ({ showModal, modalData, onClose }) => {
  const data = modalData;
  const navigate = useNavigate();
  if (!showModal) return null;

  return (
    <div onClick={onClose} className='modal-overlay'>
      <div onClick={(e) => { e.stopPropagation()}} className='container-modal'>
        <FaTimes className='modal-close' onClick={onClose}>
            Close
        </FaTimes>
        <div className='modal-content'>
          <h2>Modal title</h2>
          <p>U sfsnfkj ajksdg ksjdhnglskdjngkjbsnkjbgakjdbghjbk nbaskjfbjsbfjas j kjasbfhavshjfvbsajnf bsnbsnfb jasbah sf hjasgfjkas jsbnkj sfajskfasnfbjf ajksbfj fajks fkasjnlak fan jasb asiu vbsajvwy knbs vasbasjk v i</p>
        </div>
      </div>
    </div>
  )
};

export default Modal