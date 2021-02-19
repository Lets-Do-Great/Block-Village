import React from 'react';
import styles from './modal2_step_0.module.css'

const Modal2Step0 = ({ change_modal2_step_0 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.body} onClick={change_modal2_step_0}>
      </div>
    </>
  )
};

export default Modal2Step0;