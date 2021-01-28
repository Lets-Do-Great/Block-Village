import React from 'react';
import { Route } from 'react-router-dom';
import styles from './log_in.module.css';
import LogInForm from '../log_in_form/log_in_form';
import SnsLogInForm from '../sns_log_in_form/sns_log_in_form';

const LogIn = ({logIn, logInInput, onChangeLogIn, setType, setSkip}) => {
  const back = () => setSkip(false);
  const goToSignUp = () => setType('signUp');
  const goToFindPW = () => setType('findPW');

  return (
    <>
      <button onClick={back}>돌아가기</button><br/>
      아직 회원이 아니시라구요? <button onClick={goToSignUp}>회원 가입 하러 가기</button><br/>
      <LogInForm
        onChangeLogIn={onChangeLogIn}
        logIn={logIn}
        logInInput={logInInput}
      /><br/>
      <button onClick={goToFindPW}>비밀번호를 잊으셨나요?</button><br/>
      <SnsLogInForm/>
    </>
  );
};

export default LogIn;