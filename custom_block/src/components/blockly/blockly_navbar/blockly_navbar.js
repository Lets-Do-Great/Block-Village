import React from 'react';
import styles from './blockly_navbar.module.css'

const BlocklyNavbar = (props) => {

  return (
    <header className={styles.navbar}>
      <h1 className={styles.title}>미션 : 미로 1</h1>
      <button className={styles.save_button}>저장하기</button>
    </header>
  )
};

export default BlocklyNavbar;