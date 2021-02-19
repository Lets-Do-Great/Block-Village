import React from 'react';
import styles from './modal3_step_1.module.css'

const Modal3Step1 = ({ change_modal3_step_1 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal3_step_1}>
      </div>
    </>
  )
};

export default Modal3Step1;