import React from 'react';
import styles from './modal2_step_0.module.css'

const Modal2Step0 = ({ change_modal2_step_0 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      {/* <div className={styles.img} /> */}
      <div className={styles.body}>
        <h1>스테이지 2로 오셨군요</h1>
        <h1>이제는 난이도가 조금 올라갔어요</h1>
        <button onClick={change_modal2_step_0}>다음</button>
      </div>
    </>
  )
};

export default Modal2Step0;