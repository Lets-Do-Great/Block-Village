import React from 'react';
import styles from './store_navbar.module.css'

const StoreNavbar = (props) => {
  return (
    <header className={styles.navbar}>

      <img className={styles.logo_img} src="/images/logo1.png" />


      <h1 className={styles.title}>블록 상점</h1>

    </header>
  )
};

export default StoreNavbar;