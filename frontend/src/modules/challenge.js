import { createAction, handleActions } from 'redux-actions';
import * as ChallengeAPI from '../service/challenge';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

const GET_ALL_CHALLENGE = 'challenge/GET_ALL_BLOCKS';



export const getAllChallenge = createAction(
  GET_ALL_CHALLENGE,
  ChallengeAPI.getAllChallenge,
);



const initialState = {
  allChallengeInfo: [],
}



const userReducer = handleActions({

  [GET_ALL_CHALLENGE]: (state, action) => ({
  }),

}, initialState);



export default applyPenders(userReducer, [
  {
    type: GET_ALL_CHALLENGE,
    onSuccess: (state, action) => {
      console.log(action.payload);
      return updateObject(state, [
        // data 맞춰야함.
      ])
    },
    onFailure: (state, action) => {
      return updateObject(state, []);
    }
  },
])