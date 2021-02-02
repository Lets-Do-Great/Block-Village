import React from 'react';
import styles from './mission_menu.module.css'

const MissionMenu = ({ missions }) => {
  return (
    <div className={styles.body}>
      <h1>{missions}</h1>
    </div>
  )
};

export default MissionMenu;