import React from 'react';
import styles from './modal_success_1.module.css'
import { BsCheckCircle } from 'react-icons/bs';
import { FaRegSmileBeam } from 'react-icons/fa';
import swal from 'sweetalert';

const ModalSuccess1 = ({ GoTwo }) => {
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

          <h1>통과 하셨습니다</h1>
          <button className={styles.btn} onClick={GoTwo}>다음 스테이지</button>
        </div>
      </div>
    </>
  )
};

export default ModalSuccess1;