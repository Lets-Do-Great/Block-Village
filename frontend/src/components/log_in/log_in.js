import React from 'react';
import styles from './log_in.module.css';
import LogInForm from './log_in_form';
import SnsLogInForm from './sns_log_in_form';

const LogIn = ({logIn, logInInput, onChangeLogIn}) => {
  return (
    <>
      <button>뒤로가기</button><br/>
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