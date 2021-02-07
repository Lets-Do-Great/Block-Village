import React from 'react';
import styles from './modal_success_3.module.css'


const ModalSuccess3 = ({ GoMyPage }) => {
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <h1>성공!!</h1>
        <h2>축하드립니다</h2>
        <h2>모든 스테이지를 클리어 하셨습니다.</h2>
        <button onClick={GoMyPage}>내 블록 확인하러 가기</button>
      </div>
    </>
  )
};

export default ModalSuccess3;