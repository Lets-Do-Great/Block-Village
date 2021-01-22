import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyPageRead from '../components/my_page/my_page_read';
import MyPageUpdate from '../components/my_page/my_page_update';
import * as UserAction from '../modules/user';

const MyPageContainer = () => {
    const [ modifyInput, setModifyInput ] = useState({
        email: '',
        nickname: '',
        prevPassword: '',
        newPassword: '',
    });

    const onChange = (e) => {
        const {name, value} = e.target;

        setModifyInput({
            ...modifyInput,
            [name]: [value],
        })
    };

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const dispatch = useDispatch();

    const onGetInfo = async () => {
        dispatch(UserAction.getInfo(userInfo.email));
    };

    const onModifyInfo = async () => {
        dispatch(UserAction.modifyInfo(modifyInput));
    }

    return (
        <>
            <MyPageRead onGetInfo={onGetInfo}/>
            <MyPageUpdate 
                onChange={onChange}
                onModifyInfo={onModifyInfo}/>
        </>
    );
};

export default MyPageContainer;