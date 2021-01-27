import React from 'react';

import styles from './navbar.module.css'
import { IoLogoAngular } from 'react-icons/io';
import { FaUserCircle } from "react-icons/fa";

import * as UserAction from '../../../modules/user';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = async () => {
    try{
      await dispatch(UserAction.logOut());
      history.push('/');
    } catch (e) {
        console.log(e);
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <IoLogoAngular size="60" color="#FFFFFF" />
      </div>

      <button onClick={logout}>로그아웃</button>

      <div className={styles.user_icon}>
        <FaUserCircle size="50" color="#FFFFFF" />
      </div>
    </div>
  )
};

export default Navbar;