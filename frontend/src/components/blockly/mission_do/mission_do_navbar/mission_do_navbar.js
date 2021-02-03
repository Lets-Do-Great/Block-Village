import React from 'react';
import styles from './mission_do_navbar.module.css';
import { BsDisplayFill, BsDisplay } from 'react-icons/bs';
import { FaRegSave } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { useHistory } from 'react-router-dom';

const MissionDoNavbar = ({ modal, statusModal }) => {
  const history = useHistory();

  const onoffModal = () => {
    statusModal();
  };

  const goStore = () => {
    history.push('/main/block_store')
  };

  return (
    <header className={styles.navbar}>

      <img className={styles.logo_img} src="/images/logo1.png" />


      <h1 className={styles.title}>미션 제작소</h1>
      <div className={styles.save_button}>
        <FaRegSave size="50" color="#FFFFFF" />
      </div>
      <div className={styles.modal_button} onClick={onoffModal}>
        {modal
          ? <BsDisplayFill size="50" color="#FFFFFF" />
          : <BsDisplay  size="50" color="#FFFFFF"  />}
      </div>
      <div className={styles.cart_button} onClick={goStore}>
        <TiShoppingCart size="50" color="#FFFFFF" />
      </div>
    </header>
  )
}

export default MissionDoNavbar;