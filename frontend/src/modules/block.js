import { createAction, handleActions } from 'redux-actions';
import * as BlockAPI from '../service/block';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';

const GET_MY_BLOCKS = 'block/GET_MY_BLOCKS';
const GET_ALL_BLOCKS = 'block/GET_ALL_BLOCKS';
const BUY_BLOCKS = 'block/BUY_BLOCKS';


export const getMyBlocks = createAction(
  GET_MY_BLOCKS,
  BlockAPI.getMyBlocks,
);

export const getAllBlocks = createAction(
  GET_ALL_BLOCKS,
  BlockAPI.getAllBlocks,
);

export const buyBlocks = createAction(
  BUY_BLOCKS,
  BlockAPI.buyBlocks,
);


const initialState = {
  allBlocksInfo: {
    '시작':  [],
    '판단':  [],
    '움직임':  [],
    '흐름':  [],
    '계산':  [],
    '그리기':  [],
    '함수':  [],
  },

  myBlocksInfo: [
    {
      name: '시작',
      colour: '#C30D23',
      blocks: [],
    },
    {
      name: '판단',
      colour: '#FFA31D',
      blocks: [],
    },
    {
      name: '움직임',
      colour: '#8FC31F',
      blocks: [],
    },
    {
      name: '흐름',
      colour: '#55CFFF',
      blocks: []
    },
    {
      name: '계산',
      colour: '#1060FF',
      blocks: []
    },
    {
      name: '그리기',
      colour: '#7D10C4',
      blocks: []
    },
    {
      name: '함수',
      colour: '#CC6666',
      blocks: []
    },
  ],
}

const blcokReducer = handleActions({
  
}, initialState);


export default applyPenders(blcokReducer, [
  {
    type: GET_MY_BLOCKS,
    onSuccess: (state, action) => {
      const response = action.payload;
      if(response.status === 200){
        if(response.data.status){
          let myNewBlocksInfo = [];
          for (const value of Object.values(response.data.data)) {
            myNewBlocksInfo.push(value)
          }
          return updateObject(state, {
            ...state,
            myBlocksInfo: myNewBlocksInfo,
          });
        } else{
          alert("내 블럭을 불러오는데 문제가 발생했습니다.");
        }
      } else { // 에러 발생
        alert("블럭을 불러오는데 불러오는데 문제가 발생했습니다.");
        console.log(action.payload.status);
      }
      return updateObject(state, state);
    },
    onFailure: (state, action) => {
      return updateObject(state, state);
    }
  },
  {
    type: GET_ALL_BLOCKS,
    onSuccess: (state, action) => {
      const response = action.payload;
      // console.log(response);

      if(response.status === 200){
        if(response.data.status){
          return updateObject(state, {
            ...state,
            allBlocksInfo: response.data.data,
          });
        } else{
            alert("모든 블럭을 불러오는데 문제가 발생했습니다.");
        }
      } else { // 에러 발생
          alert("모 불러오는데 불러오는데 문제가 발생했습니다.");
          console.log(action.payload.status);
      }
      return updateObject(state, state);
    },
    onFailure: (state, action) => {
      return updateObject(state, state);
    }
  },
  {
    type: BUY_BLOCKS,
    onSuccess: (state, action) => {
      const response = action.payload;

      if(response.status === 200){
        if(response.data.status){
          return updateObject(state, {
            ...state,
          });
        } else{
          alert("블럭을 사는데 문제가 발생했습니다.");
        }
      } else { // 에러 발생
        alert("블럭을 사는데 문제가 발생했습니다.");
        console.log(action.payload.status);
      }
      return updateObject(state, state);
    },
    onFailure: (state, action) => {
      return updateObject(state, state);
    }
  },
])