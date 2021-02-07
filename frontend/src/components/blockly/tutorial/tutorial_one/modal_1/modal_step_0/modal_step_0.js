import React from 'react';
import styles from './modal_step_0.module.css'

const ModalStep0 = ({ change_modal_step_0 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.body}>
        <h1>안녕하세요 소개글~~~~</h1>
        <button onClick={change_modal_step_0}>다음</button>
      </div>
    </>
  )
};

export default ModalStep0;