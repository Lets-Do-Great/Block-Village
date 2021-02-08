import React from 'react';
import styles from './modal_fail_1.module.css'
import { BsXCircle } from 'react-icons/bs';
import { FaRegSadCry } from 'react-icons/fa';


const ModalFail1 = ({ reStart }) => {
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>

        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.header_icon}>
              <FaRegSadCry color="#e8f7fc" size="25"/>
            </div>
            <h2>실패</h2>
          </header>

          <div className={styles.icon}>
            <BsXCircle size="70" color="#ff4040"/>
          </div>

          <h1>남은 칸수를 잘 생각해보세요!</h1>
          <button 
            className={styles.btn} 
            onClick={reStart}>다시 시도하기
          </button>
        </div>
      </div>
    </>
  )
};

export default ModalFail1;