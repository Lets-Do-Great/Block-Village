import { combineReducers } from 'redux';
import user from './user';
import mission from './mission';

// 여러 리듀서를 합쳐서 rootReducer에 선언
const rootReducer = combineReducers({ 
    user,
    mission,
});

export default rootReducer;