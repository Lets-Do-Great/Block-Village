import React from 'react';
import styles from './modal_step_3.module.css'

const ModalStep3 = ({ change_modal_step_3 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>맵을 닫고 열 수 있는 아이콘이에요!</h1>
        <button onClick={change_modal_step_3}>다음</button>
      </div>
    </>
  )
};

export default ModalStep3;