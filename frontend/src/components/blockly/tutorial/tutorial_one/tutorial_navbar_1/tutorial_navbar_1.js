import React from 'react';
import styles from './tutorial_navbar_1.module.css'
import { BsDisplayFill, BsDisplay } from 'react-icons/bs';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';

import { useHistory } from 'react-router-dom';

const TutorialNavbar1 = ({ title, modal, statusModal, icon_status }) => {
  const history = useHistory();

  const onoffModal = () => {
    statusModal();
  };

  return (
    <header className={styles.navbar}>

      <div className={styles.step_button1}>
        {icon_status[0]
          ? <FaRegCheckCircle size="45" color="#FFFFFF" /> 
          : <FaRegCircle size="45" color="#FFFFFF" />
        }
      </div>

      <div className={styles.step_button2}>
        {icon_status[1]
          ? <FaRegCheckCircle size="45" color="#FFFFFF" /> 
          : <FaRegCircle size="45" color="#FFFFFF" />
        }
      </div>

      <div className={styles.step_button3}>
        {icon_status[2]
          ? <FaRegCheckCircle size="45" color="#FFFFFF" /> 
          : <FaRegCircle size="45" color="#FFFFFF" />
        }
      </div>
   
      <img className={styles.logo_img} src="/images/logo1.png" />

      <h1 className={styles.title}>{ title }</h1>

      <div className={styles.modal_button} onClick={onoffModal}>
        {modal
          ? <BsDisplayFill size="50" color="#FFFFFF" />
          : <BsDisplay  size="50" color="#FFFFFF"  />
        }
      </div>
      
    </header>
  )
}

export default TutorialNavbar1;