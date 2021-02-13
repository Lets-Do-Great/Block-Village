import React from 'react';
import styles from './modal_step_2.module.css'

const ModalStep2 = ({ change_modal_step_2 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal_step_2}>
      </div>
    </>
  )
};

export default ModalStep2;