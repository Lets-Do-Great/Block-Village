import React from 'react';
import styles from './mission_navbar.module.css'
import { FaUserCircle } from "react-icons/fa";

const MissionNavbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.logo_img} src="/images/logo1.png" />
      </div>

      {/* <button onClick={logout}>로그아웃</button> */}

      <div className={styles.user_icon}>
        <FaUserCircle size="50" color="#FFFFFF" />
      </div>
    </div>
  )
}

export default MissionNavbar;