import { createAction, handleActions } from 'redux-actions';
import * as UserAPI from '../service/user';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

// user 관련 요청 액션 타입
const LOG_IN = 'user/LOG_IN';
const LOG_OUT = 'user/LOG_OUT';
const SIGN_UP = 'user/SIGN_UP';
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

export const modifyInfo = createAction(
    MODIFY_INFO,
    UserAPI.modifyUserInfo
)

export const findPW = createAction(
    FIND_PW,
    UserAPI.findPW
)

export const deleteInfo = createAction(
    DELETE_INFO,
    UserAPI.deleteUserInfo
)

// 초기 상태
const initialState = {
    userInfo: {
        logIn: false,
        profile: '',
        nickname: '',
        email: '',
        mileage: '',
        follower: '',
        following: '',
        introduction: '',
    },
};

// reducer 함수
const userReducer = handleActions({
    [LOG_OUT]: (state, action) => updateObject(state, { ...initialState,}),
}, initialState);

// reducer 함수로 요청된 액션들을 처리하기 위한 함수
export default applyPenders(userReducer, [
    {
        type: LOG_IN,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status) { // 로그인 성공
                    return updateObject(state, {
                        ...state,
                        userInfo:{
                            ...response.data.data,
                            logIn: true,
                        }
                    });
                } else { // 로그인 실패
                    alert("로그인에 실패하였습니다.");
                }
            } else { // 에러 발생
                alert("없는 회원 정보 입니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    // {
    //     type: LOG_OUT,
    //     onSuccess: (state, action) => {
    //         const response = action.payload;

    //         if(response.status === 200){
    //             if(response.data.status){
    //                 return updateObject(state, {
    //                     ...initialState,
    //                 });
    //             } else {
    //                 alert("현재 로그아웃 요청에 문제가 발생하였습니다.");
    //             }
    //         } else { // 에러 발생
    //             console.log(action.payload.status);
    //         }
    //         return updateObject(state, state);
    //     },
    //     onFailure: (state, action) => {
    //         return updateObject(state, state);
    //     }
    // },
    {
        type: SIGN_UP,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    alert("인증 메일을 발송하였습니다.");
                } else {
                    alert("인증 메일 발송에 실패하였습니다.");
                }
            } else { // 에러 발생
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, { });
        }
    },
    {
        type: MODIFY_INFO,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        userInfo: {
                            ...state.userInfo,
                            ...response.data.data,
                        },
                    });
                } else {
                    alert("현재 비밀번호를 확인해주세요.");
                }
            } else { // 에러 발생
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: DELETE_INFO,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...initialState,
                    });
                } else {
                    alert("현재 탈퇴 요청에 문제가 발생하였습니다.");
                }
            } else { // 에러 발생
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: FIND_PW,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    alert("임시 비밀번호가 발급되었습니다.");
                } else {
                    alert("임시 비밀번호 발급에 문제가 생겼습니다.");
                }
            }else{ // 에러 처리 코드
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
]);