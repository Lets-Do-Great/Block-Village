import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LogIn from '../components/log_in/log_in';
import * as UserAction from '../modules/user';

const LogInContainer = () => {
    // 로그인창 모달이 열려있는지 여부 파악하는 변수 => 나중에 삭제할 예정
    const [logInModal, setLogInModal] = useState(false);

    // store에 있는 state와 dispatch 가져오는 작업
    const logInInput = useSelector(state => state.user.logInInput);
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();

    console.log(logInInput);

    // 로그인 모달창 열었다가 닫았다가 할 아이 => 나중에 삭제할 예정
    const openLogIn = () => setLogInModal(true);
    const closeLogIn = () => setLogInModal(false);

    // api 요청을 보낼 함수
    const logIn = async () => {
        try {
            await UserAction.checkLogIn(logInInput); 
        } catch(e){
            console.log(e);
        }
    };

    // store에 있는 state값을 수정할 함수
    const logOut = () => dispatch(UserAction.checkLogOut());
    const onChange = (e) => {
        const {name, value} = e.target;

        console.log(UserAction.changeLogInInput({
            ...logInInput,
            [name] : value,
        }));

        UserAction.changeLogInInput({
            ...logInInput,
            [name] : value,
        });
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