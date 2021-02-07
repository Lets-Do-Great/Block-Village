import React from 'react';
import styles from './modal_step_7.module.css'

const ModalStep7 = ({ change_modal_step_7 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      {/* <div className={styles.img} /> */}
      <div className={styles.body}>
        <h1>자! 이제 문제를 풀어보세요!!</h1>
        <button onClick={change_modal_step_7}>닫기</button>
      </div>
    </>
  )
};

export default ModalStep7;