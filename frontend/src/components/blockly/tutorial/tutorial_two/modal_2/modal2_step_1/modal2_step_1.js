import React from 'react';
import styles from './modal2_step_1.module.css'

const Modal2Step1 = ({ change_modal2_step_1 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal2_step_1}>
      </div>
    </>
  )
};

export default Modal2Step1;