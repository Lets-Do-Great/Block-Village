import React from 'react';
import styles from './modal_step_6.module.css'

const ModalStep6 = ({ change_modal_step_6 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>이곳은 여러분의 블럭을 동작시키는 화면이에요!</h1>
        <button onClick={change_modal_step_6}>다음</button>
      </div>
    </>
  )
};

export default ModalStep6;