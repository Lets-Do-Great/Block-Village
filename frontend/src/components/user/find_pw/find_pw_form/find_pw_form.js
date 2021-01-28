import React from 'react';
import styles from './find_pw_form.module.css';

const FindPWForm = ({ onChangeFindFW, findPW, findPWInput }) => {

    const { email } = findPWInput;

    const onSubmitFindPW = () => {
        if(validateEmail(email)) findPW();
    }

    const validateEmail = (email) =>
    {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        return (true);
      }
      alert("이메일 형식을 맞춰주세요.")
      return (false);
    }

    return (
    <>
      <div>
        <p className={styles.comment_find_PW}>
          비밀번호를 찾을</p>
        <p className={styles.comment_find_PW}>
          이메일을 입력하세요.</p>
      </div>
      <input
        className={styles.input}
        type="email"
        name="email"
        value={email}
        onChange={onChangeFindFW}
        placeholder="이메일"
      /><br/>
      <button 
        className={styles.button_find_PW}
        onClick={onSubmitFindPW}>비밀번호 찾기</button>
    </>
    );
};

export default FindPWForm;