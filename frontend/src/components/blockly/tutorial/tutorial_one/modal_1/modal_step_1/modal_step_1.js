import React from 'react';
import styles from './modal_step_1.module.css'

const ModalStep1 = ({ change_modal_step_1 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>여기는 튜토리얼의 현재 상황이에욤</h1>
        <button onClick={change_modal_step_1}>다음</button>
      </div>
    </>
  )
};

export default ModalStep1;