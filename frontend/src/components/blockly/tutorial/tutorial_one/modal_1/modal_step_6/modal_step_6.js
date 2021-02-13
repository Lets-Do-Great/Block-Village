import React from 'react';
import styles from './modal_step_6.module.css'

const ModalStep6 = ({ change_modal_step_6 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal_step_6}>
      </div>
    </>
  )
};

export default ModalStep6;