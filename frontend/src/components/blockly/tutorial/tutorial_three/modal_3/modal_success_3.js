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

const ModalSuccess3 = ({ modal_success_state, GoMyPage }) => {
  return (
    <Modal
      isOpen={modal_success_state}
      style={customStyles}
    >
      <h1>성공!!</h1>
      <h2>축하드립니다</h2>
      <h2>모든 스테이지를 클리어 하셨습니다.</h2>
      <button onClick={GoMyPage}>내 블록 확인하러 가기</button>
    </Modal>
  )
};

export default ModalSuccess3;