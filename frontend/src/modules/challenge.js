import { createAction, handleActions } from 'redux-actions';
import * as ChallengeAPI from '../service/challenge';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

const GET_CHALLENGE_LIST = 'challenge/GET_CHALLENGE_LIST';
const GET_MY_CHALLENGE_LIST = 'challenge/GET_MY_CHALLENGE_LIST';
const SET_TODO_CHALLENGE = 'challenge/SET_TODO_CHALLENGE';

export const getChallengeList = createAction(
  GET_CHALLENGE_LIST,
  ChallengeAPI.getChallengeList,
);

export const getMyChallengeList = createAction(
  GET_MY_CHALLENGE_LIST,
  ChallengeAPI.getMyChallengeList,
);

export const setTodoChallenge = createAction(
  SET_TODO_CHALLENGE,
  ChallengeAPI.setTodoChallenge,
);

const initialState = {
  challengeList: [],
};

const challengeReducer = handleActions({
}, initialState);

export default applyPenders(challengeReducer, [
  {
    type: GET_CHALLENGE_LIST,
    onSuccess: (state, action) => {
      const response = action.payload;

      if(response.status === 200){
        if(response.data.status){
          return updateObject(state, { 
            ...state 
          });
        } else{
          alert("리스트를 불러오는데 문제가 발생했습니다.");
        }
      }else{ // 에러 발생
        alert("리스트를 불러오는데 문제가 발생했습니다.");
        console.log(action.payload.status);
      }
      return updateObject(state, initialState);
    },
    onFailure: (state, action) => {
      return updateObject(state, initialState);
    }
  },
  {
    type: GET_MY_CHALLENGE_LIST,
    onSuccess: (state, action) => {
      const response = action.payload;

      if(response.status === 200){
        if(response.data.status){
          return updateObject(state, { 
            ...state,
            challengeList: response.data.data,
          });
        } else{
          alert("리스트를 불러오는데 문제가 발생했습니다.");
        }
      }else{ // 에러 발생
        alert("리스트를 불러오는데 문제가 발생했습니다.");
        console.log(action.payload.status);
      }
      return updateObject(state, initialState);
    },
    onFailure: (state, action) => {
      return updateObject(state, initialState);
    }
  },
  {
    type: SET_TODO_CHALLENGE,
    onSuccess: (state, action) => {
      const response = action.payload;

      if(response.status === 200){
        if(response.data.status){
          return updateObject(state, { 
            ...state,
            challengeList: response.data.data,
          });
        } else{
          alert("챌린지에 참가하는데 문제가 발생했습니다.");
        }
      }else{ // 에러 발생
        alert("챌린지에 참가하는데 문제가 발생했습니다.");
        console.log(action.payload.status);
      }
      return updateObject(state, initialState);
    },
    onFailure: (state, action) => {
      return updateObject(state, initialState);
    }
  },
])