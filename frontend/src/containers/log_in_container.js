import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogIn from '../components/log_in/log_in';
import * as UserAction from '../modules/user';

const LogInContainer = () => {
    // 로그인창 모달이 열려있는지 여부 파악하는 변수 => 나중에 삭제할 예정
    const [logInModal, setLogInModal] = useState(false);
    // 현재 로그인폼 데이터 저장하는 변수
    const [logInInput, setLogInInput] = useState({
        email: '',
        password: '',
    });

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    
    // 로그인 모달창 열었다가 닫았다가 할 아이 => 나중에 삭제할 예정
    const openLogIn = () => {
        setLogInModal(true);
        initialLogInInput();
    }
    const closeLogIn = () => setLogInModal(false);

    // 로그인폼 데이터 초기화
    const initialLogInInput = () => {
        setLogInInput({
            email: '',
            password: '',
        })
    }

    // 현재 로그인폼 데이터 변경 처리 함수
    const onChange = (e) => {
        const {name, value} = e.target;
        
        setLogInInput({
            ...logInInput,
            [name]: value,
        })
    };

    // api 요청을 보낼 함수
    const logIn = async () => { 
        console.log(logInInput);
        // try {
            dispatch(UserAction.checkLogIn(logInInput)); 
        // } catch(e){
            // console.log(e);
        // }
    };

    // store에 있는 state값을 수정할 함수
    const logOut = () => { 
        console.log("로그아웃");
        dispatch(UserAction.checkLogOut());
    };

    return (
        <> 
        <div>  
            <h1>메인페이지 입니다.</h1>
            { (userInfo.logIn) 
                ? <><h3>{userInfo.userId.split('@')[0]} 님 안녕하세요</h3>
                    <button onClick={logOut}>LOGOUT</button></>
                : <button onClick={openLogIn}>LOGIN</button>
            }

            { logInModal && 
                <LogIn 
                    closeLogIn={closeLogIn} 
                    logIn={logIn} // 로그인 요청 보낼 함수
                    logInInput={logInInput} // 로그인폼 값 상태
                    onChange={onChange}/> // 로그인폼 값 변경 함수 
            }
        </div>
        </>
    );
};

export default LogInContainer;