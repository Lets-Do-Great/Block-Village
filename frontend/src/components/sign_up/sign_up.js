import React, { useState } from 'react';
import SignUpForm from './sign_up_form';
import AgreeForm from './agree_form';

const SignUp = ({ signUp, signUpInput, onChangeSignUp }) => {
    const [agreeInput, setAgreeInput] = useState(false);

    const onChangeAgree = () => setAgreeInput(true);

    return (
        <>
            <button>뒤로 가기</button>
            <button>로그인 하러 가기</button>
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