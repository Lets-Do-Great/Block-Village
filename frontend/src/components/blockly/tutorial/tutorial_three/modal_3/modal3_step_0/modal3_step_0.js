import React from 'react';
import styles from './modal3_step_0.module.css'

const Modal3Step0 = ({ change_modal3_step_0 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.body} onClick={change_modal3_step_0}>
      </div>
    </>
  )
};

export default Modal3Step0;