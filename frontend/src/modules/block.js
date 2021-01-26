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
  allBlcoksInfo: [
    {
      block_id: null,
      name: '',
      type: '',
      colour: '',
      image: null,
      price: 0,
    },
  ],
  myBlocksInfo: [
    {
      name: '시작',
      colour: '#5C81A6',
      blocks: [
      ]
    },
    {
      name: '움직임',
      colour: '#5CA699',
      blocks: [
      ]
    }
  ],
}


export default applyPenders('', [
  {
    type: GET_MY_BLOCKS,
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
  {
    type: GET_ALL_BLOCKS,
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
  {
    type: BUY_BLOCKS,
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