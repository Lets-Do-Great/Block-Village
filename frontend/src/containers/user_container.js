import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FindPW from '../components/user/find_pw/find_pw/find_pw';
import LogIn from '../components/user/log_in/log_in/log_in';
import SignUp from '../components/user/sign_up/sign_up/sign_up';
import * as UserAction from '../modules/user';
import { modifyUserInfo } from '../service/user';

const UserContainer = ({ setSkip }) => {
    const history = useHistory();
    const [type, setType] = useState('logIn');

    // 로그인폼 데이터 저장하는 변수
    const [logInInput, setLogInInput] = useState({
        email: '',
        password: '',
    });

    // 회원가입폼 데이터 저장하는 변수
    const [signUpInput, setSignUpInput] = useState({
        emailId: '',
        emailSite: '',
        nickname: '',
        password: '',
    });

    // 비밀번호 찾기폼 데이터 저장하는 변수
    const [findPWInput, setFindPWInput] = useState({ email: ''});

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(userInfo.logIn){
            initialLogInInput();
            history.push('/main');
        }
    }, [userInfo]);

    // 로그인폼 데이터 초기화
    const initialLogInInput = () => {
        setLogInInput({
            email: '',
            password: '',
        })
    }

    // 회원가입폼 데이터 초기화
    const initialSignUpInput = () => {
        setSignUpInput({
            emailId: '',
            emailSite: '',
            nickname: '',
            password: '',
        });
    }

    // 비밀번호 찾기폼 데이터 초기화
    const initialFindPW = () => {
        setFindPWInput({
            email: ''
        });
    }

    // 로그인폼 데이터 변경 처리 함수
    const onChangeLogIn = (e) => {
        const {name, value} = e.target;
        
        setLogInInput({
            ...logInInput,
            [name]: value,
        })
    };

    // 회원가입폼 데이터 변경 처리 함수
    const onChangeSignUp = (e) => {
        const {name, value} = e.target;

        setSignUpInput({
            ...signUpInput,
            [name]: value,
        })
    }

    // 비밀번호 찾기폼 데이터 변경 처리 함수
    const onChangeFindFW = (e) => {
        const {value} = e.target;

        setFindPWInput({
            email: value,
        });
    }

    /* api 요청을 보낼 함수 */
    // 로그인 요청
    const logIn = async () => { 
        try{
            await dispatch(UserAction.logIn(logInInput)); 
        } catch (e) {
            console.log(e);
        }
    };

    // 회원가입 요청
    const signUp = async () => {
        try{
            await dispatch(UserAction.signUp(signUpInput));
            initialSignUpInput();
            setType('logIn');
        } catch (e) {
            console.log(e);
        }
    }

    // 비밀번호찾기 요청
    const findPW = async () => {
        try{
            await dispatch(UserAction.findPW(findPWInput.email));
            initialFindPW();
            setType('logIn');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <> 
        <div>  
            { type === 'logIn' && 
                <LogIn
                    setSkip={setSkip}
                    setType={setType}
                    logIn={logIn} // 로그인 요청 보낼 함수
                    logInInput={logInInput} // 로그인폼 값 상태
                    onChangeLogIn={onChangeLogIn} // 로그인폼 값 변경 함수 
                />
            }
            { type === 'signUp' &&
                <SignUp
                    setSkip={setSkip}
                    setType={setType}
                    signUp={signUp}
                    signUpInput={signUpInput}
                    onChangeSignUp={onChangeSignUp}
                />
            }
            { type === 'findPW' && 
                <FindPW
                    setType={setType}
                    findPW={findPW}
                    findPWInput={findPWInput}
                    onChangeFindFW={onChangeFindFW}
                />
            }
        </div>
        </>
    );
};

export default UserContainer;