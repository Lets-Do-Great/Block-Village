import React from 'react';
import styles from './store_navbar.module.css';
import { FaFortAwesomeAlt } from 'react-icons/fa';

const StoreNavbar = ({ chageOpenMyBlock }) => {
  return (
    <header className={styles.navbar}>

      <img className={styles.logo_img} src="/images/logo1.png" />


      <h1 className={styles.title}>블록 상점</h1>

      <div className={styles.go_my_block} onClick={() => chageOpenMyBlock()}>
        <img src="/images/block_store/block_store_my_block.png"/>
      </div>

    </header>
  )
};

export default StoreNavbar;