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

const ModalFail1 = ({ modal_fail_state, reStart }) => {
  return (
    <Modal
      isOpen={modal_fail_state}
      style={customStyles}
    >
      <h1>실패 ㅠㅠ</h1>
      <button onClick={reStart}>다시 시도하기</button>
    </Modal>
  )
};

export default ModalFail1;