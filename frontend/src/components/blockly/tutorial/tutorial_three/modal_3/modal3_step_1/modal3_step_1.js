import React from 'react';
import styles from './modal3_step_1.module.css'

const Modal3Step1 = ({ change_modal3_step_1 }) => {
  return (
    <>
      <div className={styles.modal_background}/>
      <div className={styles.img} />
      <div className={styles.body}>
        <h1>반복하기 블럭은 지정하는 횟수 만큼 안에 있는 블럭을 반복시키는 친구에요</h1>
        <h1>왼쪽의 맵을 잘 보고 꼭 성공하길 바래요!!</h1>
        <button onClick={change_modal3_step_1}>다음</button>
      </div>
    </>
  )
};

export default Modal3Step1;