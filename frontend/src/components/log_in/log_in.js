import React from 'react';
import { Route } from 'react-router-dom';
import styles from './log_in.module.css';
import LogInForm from './log_in_form';
import SnsLogInForm from './sns_log_in_form';

const LogIn = ({logIn, logInInput, onChangeLogIn, history}) => {
  return (
    <>
      <button onClick={() => { history.goback(); }}>뒤로가기</button><br/>
      <LogInForm
        onChangeLogIn={onChangeLogIn}
        logIn={logIn}
        logInInput={logInInput}
      /><br/>
      <SnsLogInForm/>
    </>
  );
};

export default LogIn;