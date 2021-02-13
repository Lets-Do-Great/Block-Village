import React from 'react';
import styles from './modal_step_3.module.css'

const ModalStep3 = ({ change_modal_step_3 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body} onClick={change_modal_step_3}>
      </div>
    </>
  )
};

export default ModalStep3;