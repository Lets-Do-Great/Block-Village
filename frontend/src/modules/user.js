import { createAction, handleActions } from 'redux-actions';
import * as UserAPI from '../service/user';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

// user 관련 요청 액션 타입
const LOG_IN = 'user/LOG_IN';
const LOG_OUT = 'user/LOG_OUT';
const SIGN_UP = 'user/SIGN_UP';
const GET_INFO = 'user/GET_INFO';
const MODIFY_INFO = 'user/MODIFY_INFO';
const DELETE_INFO = 'user/DELETE_INFO';
const FIND_PW = 'user/FIND_PW';

// 액션 객체 생성함수
export const logIn = createAction(
    LOG_IN,
    UserAPI.logIn
);

export const logOut = createAction(
    LOG_OUT
);

export const signUp = createAction(
    SIGN_UP,
    UserAPI.setUserInfo
);

export const getInfo = createAction(
    GET_INFO,
    UserAPI.getUserInfo
);

export const modifyInfo = createAction(
    MODIFY_INFO,
    UserAPI.modifyUserInfo
)

// 초기 상태
const initialState = {
    userInfo: {
        logIn: false,
        email: '',
        nickname: '',
        // 머 더있나
    },
};

// reducer 함수
const userReducer = handleActions({
    [LOG_OUT]: (state, action) => ({
        ...state,
        userInfo:{
            logIn: false,
            email: '',
            nickname: '',
        }
    }),
}, initialState);

// reducer 함수로 요청된 액션들을 처리하기 위한 함수
export default applyPenders(userReducer, [
    {
        type: LOG_IN,
        onSuccess: (state, action) => {
            console.log(action.payload);
            return updateObject(state, {
                ...state,
                userInfo:{
                    logIn: true,
                    email: action.payload.data.data.email,
                    nickname: action.payload.data.data.nickname,
                }
             });
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: LOG_OUT,
        onSuccess: (state, action) => {
            console.log(action.payload);
            if(action.payload.status === 200){
                return updateObject(state, { 
                    ...state,
                    userInfo:{
                        logIn: false,
                        email: '',
                        nickname: '',
                    }
                });
            }else{
                // 에러 처리 코드
            }
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: SIGN_UP,
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