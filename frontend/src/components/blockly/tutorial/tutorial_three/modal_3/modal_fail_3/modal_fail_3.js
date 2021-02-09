import React from 'react';
import styles from './modal_fail_3.module.css'

const ModalFail3 = ({ reStart }) => {
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <h1>실패 ㅠㅠ</h1>
        <button onClick={reStart}>다시 시도하기</button>
      </div>
    </>
  )
};

export default ModalFail3;