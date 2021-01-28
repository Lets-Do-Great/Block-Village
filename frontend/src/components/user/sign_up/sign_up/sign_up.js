import React, { useState } from 'react';
import SignUpForm from '../sign_up_form/sign_up_form';
import AgreeForm from '../agree_form/agree_form';
import styles from './sign_up.module.css';
import { MdArrowBack } from 'react-icons/md';

const SignUp = ({ signUp, signUpInput, onChangeSignUp, setType, setSkip }) => {
    const [agreeInput, setAgreeInput] = useState(false);

    const back = () => setSkip(false);
    const goToLogIn = () => setType('logIn');

    const onChangeAgree = () => setAgreeInput(true);

    return (
        <>  
            <div className={styles.back}>
            <MdArrowBack 
                className={styles.back_icon}
                onClick={back}/>
            <button
                className={styles.button_back} 
                onClick={back}>홈으로</button><br/>
            </div>

            <div className={styles.comment}>
                <p
                    className={styles.comment_log_in}>
                        이미 회원이신가요?</p>
                <button 
                    className={styles.button_log_in} 
                    onClick={goToLogIn}>
                        로그인 하러 가기</button><br/>
            </div>

            <div className={styles.sign_up_form}>
                { agreeInput
                ?   <SignUpForm
                        signUp={signUp}
                        signUpInput={signUpInput}
                        onChangeSignUp={onChangeSignUp}
                    />
                : <AgreeForm 
                    onChangeAgree={onChangeAgree}
                />
                }
            </div>
           
        </>
    );
};

export default SignUp;