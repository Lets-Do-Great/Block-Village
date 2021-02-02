import React from 'react';
import styles from './tutorial_navbar.module.css'
import { BsDisplayFill, BsDisplay } from 'react-icons/bs';

import { useHistory } from 'react-router-dom';

const TutorialNavbar = ({ modal, statusModal }) => {
  const history = useHistory();

  const onoffModal = () => {
    statusModal();
  };

  return (
    <header className={styles.navbar}>
      
      <img className={styles.logo_img} src="/images/logo1.png" />

      <h1 className={styles.title}>튜토리얼 1</h1>

      <div className={styles.modal_button} onClick={onoffModal}>
        {modal
          ? <BsDisplayFill size="50" color="#FFFFFF" />
          : <BsDisplay  size="50" color="#FFFFFF"  />
        }
      </div>
      
    </header>
  )
}

export default TutorialNavbar;