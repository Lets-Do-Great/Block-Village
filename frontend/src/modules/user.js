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

// 액션 객체 생성함수
export const checkLogIn = createAction(
    CHECK_LOG_IN,
    UserAPI.logIn
);

export const checkLogOut = createAction(
    CHECK_LOG_OUT
);

// 초기 상태
const initialState = {
    userInfo: {
        logIn: false,
        userId: '',
        nickname: '',
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
const userReducer = handleActions({
    [CHECK_LOG_OUT]: (state, action) => ({
        ...state,
        userInfo:{
            logIn: false,
            userId: '',
            nickname: '',
        }
    }),

}, initialState);

// reducer 함수로 요청된 액션들을 처리하기 위한 함수
export default applyPenders(userReducer, [
    {
        type: CHECK_LOG_IN,
        onSuccess: (state, action) => {
            console.log(action);
            return updateObject(state, {
                ...state,
                userInfo:{
                    logIn: true,
                    userId: "ssafy@ssafy.com",
                    nickname: '싸피',
                    // userId: action.payload.data.userId,
                    // nickname: action.payload.data.nickname,
                }
             });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: CHECK_LOG_OUT,
        onSuccess: (state, action) => {
            console.log(action);
            return updateObject(state, { 
                ...state,
                userInfo:{
                    logIn: false,
                    userId: '',
                    nickname: '',
                }
            });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: SET_INFO,
        onSuccess: (state, action) => {
            return updateObject(state, { });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: GET_INFO,
        onSuccess: (state, action) => {
            return updateObject(state, { });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: MODIFY_INFO,
        onSuccess: (state, action) => {
            return updateObject(state, { });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: DELETE_INFO,
        onSuccess: (state, action) => {
            return updateObject(state, { });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: FIND_PW,
        onSuccess: (state, action) => {
            return updateObject(state, { });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
]);