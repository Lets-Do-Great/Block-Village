import { createAction, handleActions } from 'redux-actions';
import * as MissionAPI from '../service/mission';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

// mission 관련 요청 액션 타입
const GET_MISSION_LIST = 'mission/GET_MISSION_LIST';
const GET_MISSION = 'mission/GET_MISSION';
const GET_MY_MISSION_LIST = 'mission/GET_MY_MISSION_LIST';
const GET_MY_TODO_MISSION_LIST = 'mission/GET_MY_TODO_MISSION_LIST';
const SET_MISSION = 'mission/SET_MISSION';
const MODIFY_MISSION = 'mission/MODIFY_MISSION';
const DELETE_MISSION = 'mission/DELETE_MISSION';
const LIKE_MISSION = 'mission/LIKE_MISSION';
const DIFFICULTY_MISSION = 'mission/DIFFICULTY_MISSION';
const PARTICIPATE_MISSION = 'mission/PARTICIPATE_MISSION';

// 액션 객체 생성 함수
export const getMissionList = createAction(
    GET_MISSION_LIST,
    MissionAPI.getMissionList
);

export const getMission = createAction(
    GET_MISSION,
    MissionAPI.getMission
)

export const getMyMissionList = createAction(
    GET_MY_MISSION_LIST,
    MissionAPI.getMyMissionList
)

export const getMyTodoMissionList = createAction(
    GET_MY_TODO_MISSION_LIST,
    MissionAPI.getMyTodoMissionList
)

export const setMission = createAction(
    SET_MISSION,
    MissionAPI.setMission
);

export const modifyMission = createAction(
    MODIFY_MISSION,
    MissionAPI.modifyMission
)

export const deleteMission = createAction(
    DELETE_MISSION,
    MissionAPI.deleteMission
)

export const setLikeMission = createAction(
    LIKE_MISSION,
    MissionAPI.setLikeMission
)

export const setDifficultyMission = createAction(
    DIFFICULTY_MISSION,
    MissionAPI.setDifficultyMission
)

export const setTodoMission = createAction(
    PARTICIPATE_MISSION,
    MissionAPI.setTodoMission
)

// 초기상태
const initialState = {
    missionList: [],
    selectedMission: {
        missionId: '',
        nickName: '',
        title: '',
        created_at: '',
        updated_at: '',
        content: '',
        code: '',
        imageUrl: '',
        difficulty: '',
        likeCnt: '',
        peopleCnt: '',
        like: false,
    },
    pageInfo: {
        pageisFirst: null,
        pageSize: 0,
        pageNumber: 0,
        pageTotalPages: 0,
        pageTotalElements: 0,
    }
};

// reducer 함수
const missionReducer = handleActions({

}, initialState);

// reducer 함수로 요청된 액션들을 처리하기 위한 함수
export default applyPenders(missionReducer, [
    {
        type: GET_MISSION_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        missionList: response.data.data[0],
                        pageInfo: response.data.data[1],
                    });
                } else{
                    alert("리스트를 불러오는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("리스트를 불러오는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: GET_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;
            
            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        selectedMission: response.data.data,
                    });
                } else{
                    alert("미션을 불러오는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("미션을 불러오는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: GET_MY_MISSION_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        missionList: response.data.data,
                    });
                } else{
                    alert("리스트를 불러오는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("리스트를 불러오는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: GET_MY_TODO_MISSION_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        missionList: response.data.data,
                    });
                } else{
                    alert("리스트를 불러오는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("리스트를 불러오는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: SET_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        selectedMission: response.data.data,
                    });
                } else{
                    alert("미션을 저장하는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("미션을 저장하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: MODIFY_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        selectedMission: response.data.data,
                    });
                } else{
                    alert("미션을 수정하는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("미션을 수정하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: DELETE_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        selectedMission: initialState.selectedMission,
                    });
                } else{
                    alert("미션을 삭제하는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("미션을 삭제하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: LIKE_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;
            console.log(response);

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                        selectedMission: response.data.data,
                    });
                } else{
                    alert("좋아요 설정 기능에 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("좋아요 설정 기능에 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: DIFFICULTY_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                    });
                } else{
                    alert("난이도를 설정하는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("난이도를 설정하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: PARTICIPATE_MISSION,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200){
                if(response.data.status){
                    return updateObject(state, {
                        ...state,
                    });
                } else{
                    alert("미션에 참여하는데 문제가 발생했습니다.");
                }
            } else { // 에러 발생
                alert("미션에 참여하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
]);
