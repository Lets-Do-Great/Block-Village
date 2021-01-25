import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FindPW from '../components/find_pw/find_pw';
import LogIn from '../components/log_in/log_in';
import SignUp from '../components/sign_up/sign_up';
import * as UserAction from '../modules/user';

const UserContainer = () => {
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
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();

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
        dispatch(UserAction.logIn(logInInput)); 
    };

    // 로그아웃 요청
    const logOut = () => { 
        dispatch(UserAction.logOut());
    };

    // 회원가입 요청
    const signUp = () => {
        dispatch(UserAction.signUp(signUpInput));
    }

    // 비밀번호찾기 요청
    const findPW = () => {
        dispatch(UserAction.findPW(findPWInput.email));
    }

    return (
        <> 
        <div>  
            <Link to="/user/login">[ 로그인하러 가기 ] </Link>
            <Link to="/user/signUp">[ 회원가입하러 가기 ] </Link>
            
            <Switch>
                <Route path="/user/login">
                    <LogIn
                        logIn={logIn} // 로그인 요청 보낼 함수
                        logInInput={logInInput} // 로그인폼 값 상태
                        onChangeLogIn={onChangeLogIn} // 로그인폼 값 변경 함수 
                    />
                </Route>
                <Route path="/user/signUp">
                    <SignUp
                        signUp={signUp}
                        signUpInput={signUpInput}
                        onChangeSignUp={onChangeSignUp}
                    />
                </Route>
                <Route path="/user/findPW">
                    <FindPW
                        findPW={findPW}
                        findPWInput={findPWInput}
                        onChangeFindFW={onChangeFindFW}
                    />
                </Route>

            </Switch>
        </div>
        </>
    );
};

export default UserContainer;