import React from 'react';
import { Route } from 'react-router-dom';
import styles from './log_in.module.css';
import LogInForm from '../log_in_form/log_in_form';
import SnsLogInForm from '../sns_log_in_form/sns_log_in_form';
import { MdArrowBack } from 'react-icons/md';

const LogIn = ({logIn, logInInput, onChangeLogIn, setType, setSkip}) => {
  const back = () => setSkip(false);
  const goToSignUp = () => setType('signUp');

  return (
    <>
      <div className={styles.back}>
        <MdArrowBack 
          className={styles.back_icon}
          onClick={back} />
        <button
          className={styles.button_back} 
          onClick={back}>돌아가기</button><br/>
      </div>

      <div className={styles.log_in_form}>
        <div className={styles.comment_sign_up}>아직 회원이 아니시라구요? </div>
        <button 
          className={styles.button_sign_up}
          onClick={goToSignUp}>회원 가입 하러 가기</button><br/>
        <LogInForm
          onChangeLogIn={onChangeLogIn}
          logIn={logIn}
          logInInput={logInInput}
          setType={setType}
          /><br/>
        <SnsLogInForm/>
      </div>
    </>
  );
};

export default LogIn;