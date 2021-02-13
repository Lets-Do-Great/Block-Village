import React from 'react';
import styles from './modal_step_4.module.css'

const ModalStep4 = ({ change_modal_step_4 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal_step_4}>
      </div>
    </>
  )
};

export default ModalStep4;