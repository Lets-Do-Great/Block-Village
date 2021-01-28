import React, { useEffect, useState } from 'react';
import styles from './sign_up_form.module.css';

const SignUpForm = ({ signUp, signUpInput, onChangeSignUp }) => {
    // 회원가입폼 구성하는 속성들 비구조화 할당
    const { emailId, emailSite, nickname, password } = signUpInput;

    // 비밀번호 일치하는지 확인하는 데이터
    const [ PWConfirm, setPWConfirm ] = useState({
            PW: '',
            check: false,
        }
    );
    
    // 비밀번호를 입력할 때마다 비교하는 함수
    useEffect(() => {
        validatePWConfirm();
    }, [ PWConfirm.PW, password ]);

    // 회원가입 할 조건이 맞는지 확인하는 함수
    const onSubmitSignUp = () => {
        if(validateNickName(nickname)   
            && validatePW(password) 
            && PWConfirm.check ){
                signUp();
        }
    }

    // 비밀번호 확인 값이 바뀔 때마다 바꾸는 함수
    const onChange = (e) => {
        setPWConfirm({
            ...PWConfirm,
            PW: e.target.value,
        });
    }   

    // 닉네임 입력했는지 확인하는 함수
    const validateNickName = (nickName) => {
        if(nickName.length > 0){
            return true;
        } else {
            alert("닉네임을 입력해주세요.");
            return false;
        }
    }

    // 비밀번호 입력했는지 확인하는 함수
    const validatePW = (password) => {
        if(password !== ''){
            return true;
        } else {
            alert("비밀번호를 입력하세요.");
            return false;
        } 
    }

    // 비밀번호 확인이 동일한지 확인하는 함수
    const validatePWConfirm = () => {
        if(password.length === 0 || PWConfirm.PW.length === 0) {
            setPWConfirm({
                ...PWConfirm,
                check: false,
            });
        } else if(password === PWConfirm.PW) {
            setPWConfirm({
                ...PWConfirm,
                check: true,
            });
        } else{
            setPWConfirm({
                ...PWConfirm,
                check: false,
            });
        }
    }
    
    return (
    <>
        <h2>회 원 가 입</h2>
        <input 
            className={styles.input_small}
            type="text"
            name="emailId" 
            value={emailId} 
            onChange={onChangeSignUp} 
            placeholder="이메일"/>@
        <input 
            className={styles.input_small}
            type="text"
            name="emailSite" 
            value={emailSite} 
            onChange={onChangeSignUp} 
            placeholder="직접입력"/><br/>
        <input
            className={styles.input} 
            type="text"
            name="nickname" 
            value={nickname} 
            onChange={onChangeSignUp} 
            placeholder="닉네임"/><br/>
        <input
            className={styles.input} 
            type="password"
            name="password" 
            value={password} 
            onChange={onChangeSignUp} 
            placeholder="비밀번호"/><br/>
        <input 
            className={styles.input}
            type="password"
            name="PWConfirm" 
            value={PWConfirm.PW}
            onChange={onChange} 
            placeholder="비밀번호 확인"/>

        {
            PWConfirm.check
            ? <p className={styles.comment_confirm_PW}>
                비밀번호가 일치합니다.</p>
            : <p className={styles.comment_confirm_PW}>
                비밀번호가 일치하지 않습니다.</p>
        }
        
        <button 
            className={styles.button_sign_up}
            onClick={onSubmitSignUp}>가입하기</button>
    </>
    );
}

export default SignUpForm;