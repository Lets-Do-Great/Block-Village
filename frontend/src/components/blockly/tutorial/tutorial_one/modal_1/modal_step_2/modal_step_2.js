import React from 'react';
import styles from './modal_step_2.module.css'

const ModalStep2 = ({ change_modal_step_2 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>이것은 미션이나 챌린지 이름이에요~~</h1>
        <button onClick={change_modal_step_2}>다음</button>
      </div>
    </>
  )
};

export default ModalStep2;