import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyInfoRead from '../components/my_page/my_info/my_info_read/my_info_read';
import MyInfoModify from '../components/my_page/my_info/my_info_modify/my_info_modify';
import * as UserAction from '../modules/user';

const MyPageContainer = () => {
    // 정보 수정폼 데이터 저장하는 변수
    const [ modifyInput, setModifyInput ] = useState({
        profile: '',
        nickname: '',
        email: '',
        introduction: '',
        prevPassword: '',
        newPassword: '',
    });
    
    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();

    // 정보 업데이트 되면 수정폼 데이터 업데이트하기
    useEffect(() => {
        initialModifyForm();
    }, [ userInfo ]);
    
    // 정보 수정폼 데이터 초기화
    const initialModifyForm = () => {
        setModifyInput({
            profile: '',
            nickname: '',
            email: userInfo.email,
            introduction: userInfo.introduction,
            prevPassword: '',
            newPassword: '',
        });
    }

    // 정보 수정폼 데이터 변경 처리 함수
    const onChangeModify = (e) => {
        const {name, value} = e.target;

        setModifyInput({
            ...modifyInput,
            [name]: value,
        });
    };

    /* api 요청을 보낼 함수 */
    // 정보수정 요청
    const modifyInfo = async () => {
        dispatch(UserAction.modifyInfo(modifyInput));
    }

    return (
        <>
            <MyInfoRead 
                userInfo={userInfo}/>
            <MyInfoModify
                modifyInfo={modifyInfo}
                modifyInput={modifyInput}
                onChangeModify={onChangeModify}/>
        </>
    );
};

export default MyPageContainer;