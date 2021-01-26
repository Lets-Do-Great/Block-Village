import { combineReducers } from 'redux';
import block from './block';
import challenge from './challenge';

// 여러 리듀서를 합쳐서 rootReducer에 선언
const rootReducer = combineReducers({ 
    block,
    challenge,
});

export default rootReducer;