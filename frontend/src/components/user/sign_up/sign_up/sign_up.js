import React, { useState } from 'react';
import SignUpForm from '../sign_up_form/sign_up_form';
import AgreeForm from '../agree_form/agree_form';

const SignUp = ({ signUp, signUpInput, onChangeSignUp, setType, setSkip }) => {
    const [agreeInput, setAgreeInput] = useState(false);

    const back = () => setSkip(false);
    const goToLogIn = () => setType('logIn');

    const onChangeAgree = () => setAgreeInput(true);

    return (
        <>
            <button onClick={back}>홈으로</button><br/>
            이미 회원이신가요?<button onClick={goToLogIn}>로그인 하러 가기</button><br/>
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
        </>
    );
};

export default SignUp;