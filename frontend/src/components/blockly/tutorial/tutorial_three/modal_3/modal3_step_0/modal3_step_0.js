import React from 'react';
import styles from './modal3_step_0.module.css'

const Modal3Step0 = ({ change_modal3_step_0 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      {/* <div className={styles.img} /> */}
      <div className={styles.body}>
        <h1>스테이지 3로 오셨군요</h1>
        <h1>이번에는 조금 많이 어려울 수도 있어요!</h1>
        <h1>화이팅!</h1>
        <button onClick={change_modal3_step_0}>다음</button>
      </div>
    </>
  )
};

export default Modal3Step0;