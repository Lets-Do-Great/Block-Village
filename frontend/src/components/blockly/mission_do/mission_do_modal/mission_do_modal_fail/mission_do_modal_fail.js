import React, { useRef }  from 'react';
import styles from './mission_do_modal_fail.module.css';

const MissionDoModalFail = ({ onChangeFail }) => {

  
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <h2>실패 ㅠㅠㅠ</h2>
        <button onClick={onChangeFail}>다시 시도하기</button>
      </div>
    </>
  )
}

export default MissionDoModalFail;