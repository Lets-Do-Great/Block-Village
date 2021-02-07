import React from 'react';
import styles from './modal2_step_1.module.css'

const Modal2Step1 = ({ change_modal2_step_1 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>이 블럭은 캐릭터를 회전 시킬 수 있는 블럭이에요!</h1>
        <h1>지금 캐릭터가 오른쪽을 보고 있으니 위로 가려면 90도로 이동 시켜줘야겠죠??</h1>
        <button onClick={change_modal2_step_1}>다음</button>
      </div>
    </>
  )
};

export default Modal2Step1;