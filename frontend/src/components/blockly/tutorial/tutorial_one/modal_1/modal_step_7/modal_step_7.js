import React from 'react';
import styles from './modal_step_7.module.css'

const ModalStep7 = ({ change_modal_step_7 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.body} onClick={change_modal_step_7}>
      </div>
    </>
  )
};

export default ModalStep7;