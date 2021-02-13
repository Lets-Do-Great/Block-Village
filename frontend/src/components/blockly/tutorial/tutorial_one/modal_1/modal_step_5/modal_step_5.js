import React from 'react';
import styles from './modal_step_5.module.css'

const ModalStep5 = ({ change_modal_step_5 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal_step_5}>
      </div>
    </>
  )
};

export default ModalStep5;