import React from 'react';

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
        <h1>비밀번호를 찾을 이메일을 입력하세요.</h1>
        <input
            type="email"
            name="email"
            value={email}
            onChange={onChangeFindFW}
            placeholder="이메일"
        />
        <button onClick={onSubmitFindPW}>비밀번호 찾기</button>
    </>
    );
};

export default FindPWForm;