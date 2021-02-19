import React from 'react';
import styles from './modal_success_3.module.css';
import { BsCheckCircle } from 'react-icons/bs';
import { FaRegSmileBeam } from 'react-icons/fa';


const ModalSuccess3 = ({ GoMain }) => {
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <div className={styles.container}>

          <header className={styles.header}>
            <div className={styles.header_icon}>
              <FaRegSmileBeam color="#e8f7fc" size="25"/>
            </div>
            <h2>성공!</h2>
          </header>

          <div className={styles.icon}>
            <BsCheckCircle size="70" color="#27ae60"/>
          </div>

          <h3>축하드립니다</h3>
          <h3>모든 스테이지를 클리어 하셨습니다.</h3>
          <h3>블록 몇개를 선물로 드렸으니</h3>
          <h3>마이 홈에서 확인해보세요!!</h3>
          <button className={styles.btn} onClick={GoMain}>메인으로 돌아가기</button>
        </div>
      </div>
    </>
  )
};

export default ModalSuccess3;