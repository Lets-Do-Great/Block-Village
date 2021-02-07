import React from 'react';
import styles from './modal_success_2.module.css'

const ModalSuccess2 = ({ GoThree }) => {
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <h1>통과 하셨습니다.</h1>
        <button onClick={GoThree}>다음 스테이지</button>
      </div>
    </>
  )
};

export default ModalSuccess2;