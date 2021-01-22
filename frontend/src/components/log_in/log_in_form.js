import React from 'react';

const LogInForm = ({logIn, logInInput, onChangeLogIn}) => {
  // 로그인폼 구성하는 속성들 비구조화 할당
  const { email, password } = logInInput;

  // 로그인 할 조건이 맞는지 확인하는 함수
  const onSubmitLogIn = () => {
    if(validateEmail(email) && validatePW(password)){
      logIn();
    }
  }

  // 이메일 형식 맞는지 확인하는 함수
  const validateEmail = (email) =>
  {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      return (true);
    }
    alert("이메일 형식을 맞춰주세요.")
    return (false);
  }

  // 비밀번호 입력했는지 확인하는 함수
  const validatePW = (password) => {
    if(password === ''){
      alert("비밀번호를 입력하세요.");
      return (false);
    }
    return (true);
  }

  return (
      <>
        <input 
            type="text" 
            name="email"
            value={email}
            onChange={onChangeLogIn}  
            placeholder="EMAIL"/><br/>
        <input 
            type="password" 
            name="password"
            value={password}
            onChange={onChangeLogIn} 
            placeholder="PW"/><br/>
        <button onClick={onSubmitLogIn}>LOGIN</button>
    </>
  );
};

export default LogInForm;