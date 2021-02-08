import { combineReducers } from 'redux';
import block from './block';
import challenge from './challenge';
import user from './user';
import mission from './mission';
import answer from './answer';

// 여러 리듀서를 합쳐서 rootReducer에 선언
const rootReducer = combineReducers({ 
    user,
    mission,
    block,
    challenge,
    answer,
})
export default rootReducer;