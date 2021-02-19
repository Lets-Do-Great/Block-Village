import React from 'react';
import styles from './modal_step_1.module.css'

const ModalStep1 = ({ change_modal_step_1 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal_step_1}></div>
    </>
  )
};

export default ModalStep1;