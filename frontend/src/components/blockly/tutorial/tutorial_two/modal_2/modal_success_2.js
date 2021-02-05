import React from 'react';
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

const ModalSuccess2 = ({ modal_success_state, GoThree }) => {
  return (
    <Modal
      isOpen={modal_success_state}
      style={customStyles}
    >
      <h1>성공!!</h1>
      <button onClick={GoThree}>다음 스테이지</button>
    </Modal>
  )
};

export default ModalSuccess2;