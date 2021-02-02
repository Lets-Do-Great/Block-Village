import React from 'react';
import styles from './modal_success_1.module.css'
import Modal from 'react-modal';

const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }
};
Modal.setAppElement('#root');

const ModalSuccess1 = ({ modal_success_state, GoTwo }) => {
  return (
    <Modal
      isOpen={modal_success_state}
      style={customStyles}
    >
      <h1>성공!!</h1>
      <button onClick={GoTwo}>다음 스테이지</button>
    </Modal>
  )
};

export default ModalSuccess1;