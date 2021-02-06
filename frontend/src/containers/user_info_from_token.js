import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as UserAction from '../modules/user';

const UserInfoFromToken = ({ userInfo, setCallAction }) => {
    const dispatch = useDispatch();

    useEffect(() =>{
        getTokenUserInfo();
    }, []);

    const getTokenUserInfo = async () => {
        try {
            await dispatch(UserAction.getUserInfo(userInfo));
            setCallAction(false);
        } catch (e) {
            console.log(e);
        }
    }

    return (<></>);
};

export default UserInfoFromToken;