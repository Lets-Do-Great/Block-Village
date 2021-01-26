import React from 'react';
import styles from './navbar.module.css'
import { IoLogoAngular } from 'react-icons/io';
import { FaUserCircle } from "react-icons/fa";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <IoLogoAngular size="60" color="#FFFFFF" />
      </div>
      <div className={styles.user_icon}>
        <FaUserCircle size="50" color="#FFFFFF" />
      </div>
    </div>
  )
};

export default Navbar;