import React from 'react';
import styles from './modal_step_0.module.css'

const ModalStep0 = ({ change_modal_step_0 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.body} onClick={change_modal_step_0}></div>
    </>
  )
};

export default ModalStep0;