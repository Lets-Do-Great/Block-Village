import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogIn from '../components/log_in/log_in';
import * as UserAction from '../modules/user';

const UserContainer = () => {
    // 현재 로그인폼 데이터 저장하는 변수
    const [logInInput, setLogInInput] = useState({
        email: '',
        password: '',
    });

    // 로그인폼 데이터 초기화
    const initialLogInInput = () => {
        setLogInInput({
            email: '',
            password: '',
        })
    }

    // 현재 로그인폼 데이터 변경 처리 함수
    const onChangeLogIn = (e) => {
        const {name, value} = e.target;
        
        setLogInInput({
            ...logInInput,
            [name]: value,
        })
    };

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();
    
    // api 요청을 보낼 함수
    const logIn = async () => { 
        // try {
            dispatch(UserAction.checkLogIn(logInInput)); 
        // } catch(e){
            // console.log(e);
        // }
    };

    // store에 있는 state값을 수정할 함수
    const logOut = () => { 
        dispatch(UserAction.checkLogOut());
    };

    return (
        <> 
        <div>  
            <LogIn
                logIn={logIn} // 로그인 요청 보낼 함수
                logInInput={logInInput} // 로그인폼 값 상태
                onChangeLogIn={onChangeLogIn} // 로그인폼 값 변경 함수 
            />
        </div>
        </>
    );
};

export default UserContainer;