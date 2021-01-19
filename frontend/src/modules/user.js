import { createAction, handleActions } from 'redux-actions';
import * as UserAPI from '../service/user';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

// user 관련 요청 액션 타입
const CHECK_LOG_IN = 'user/CHECK_LOG_IN';
const CHECK_LOG_OUT = 'user/CHECK_LOG_OUT';
const SET_INFO = 'user/SET_INFO';
const GET_INFO = 'user/GET_INFO';
const MODIFY_INFO = 'user/MODIFY_INFO';
const DELETE_INFO = 'user/DELETE_INFO';
const FIND_PW = 'user/FIND_PW';

// user 관련 컴포넌트에서 input 값 변경 액션 타입
const CHANGE_LOG_IN_INPUT = 'user/CHANGE_LOG_IN_INPUT';
const CHANGE_SET_INPUT = 'user/CHANGE_SET_INPUT';
const CHANGE_MODIFY_INPUT = 'user/CHANGE_MODIFY_INPUT';
const CHANGE_FIND_PW_INPUT = 'user/CHANGE_FIND_PW_INPUT';

// user 관련 컴포넌트에서 input 값 초기화 액션 타입
const INITIAL_LOG_IN_INPUT = 'user/INITIAL_LOG_IN_INPUT';
const INITIAL_SET_INPUT = 'user/INITIAL_SET_INPUT';
const INITIAL_MODIFY_INPUT = 'user/INITIAL_MODIFY_INPUT';
const INITIAL_FIND_PW_INPUT = 'user/INITIAL_FIND_PW_INPUT';

// 액션 객체 생성함수
export const checkLogIn = createAction(
    CHECK_LOG_IN,
    UserAPI.logIn
);

export const checkLogOut = () => ({
        type: CHECK_LOG_OUT,
        userInfo: initialState.userInfo,
    }
);

export const changeLogInInput = createAction(
    CHANGE_LOG_IN_INPUT
);
// export const changeLogInInput = ( logInInput ) => ({
//         type: CHANGE_LOG_IN_INPUT,
//         logInInput
//     }
// );

export const initialLogInInput = () => ({
        type: INITIAL_LOG_IN_INPUT,
        logInInput: initialState.logInInput,
    }
);

// 초기 상태
const initialState = {
    userInfo: {
        logIn: false,
        userId: '',
    },
    logInInput: {
        email: '',
        password: '',
    },
    setInput: {
        emailId: '',
        emailSite: '',
        nickName: '',
        password: '',
        passwordConfirm: '',
    },
};

// reducer 함수
const userReducer = handleActions({}, initialState);

// reducer 함수로 요청된 액션들을 처리하기 위한 함수
export default applyPenders(userReducer, [
    {
        type: CHECK_LOG_IN,
        onSuccess: (state, action) => {
            return updateObject(state, { });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: CHANGE_LOG_IN_INPUT,
        onSuccess: (state, action) => {
            console.log("여기 안옴..?");
            return updateObject(state, { logInInput: action.payload });
        },
    }
]);