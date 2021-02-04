import { createdAction, handleActions } from 'redux-actions';
import * as AnswerAPI from '../service/answer';
import { applyPenders } from 'redux-pender';
import updateObject from '../service/common';

// answer 관련 요청 액션 타입
const GET_MY_ANSWER_LIST = 'answer/GET_MY_ANSWER_LIST';
const SET_ANSWER = 'answer/SET_ANSWER';
const MODIFY_ANSWER = 'answer/MODIFY_ANSWER';
const DELETE_ANSWER = 'answer/DELETE_ANSWER';
const GET_MISSION_ANSWER_LIST = 'answer/GET_MISSION_ANSWER_LIST';
const GET_ANSWER = 'answer/GET_ANSWER';
const GET_ANSWER_LIST = 'answer/GET_ANSWER_LIST';
const SET_LIKE_ANSWER = 'answer/SET_LIKE_ANSWER';
const SET_ANSWER_COMMENT = 'answer/SET_ANSWER_COMMENT';
const MODIFY_ANSWER_COMMENT = 'answer/MODIFY_ANSWER_COMMENT';
const DELETE_ANSWER_COMMENT = 'answer/DELETE_ANSWER_COMMENT';
const GET_ANSWER_COMMENT_LIST = 'answer/GET_ANSWER_COMMENT_LIST';

// 액션 객체 생성 함수
export const getMyAnswerList = createdAction(
    GET_MY_ANSWER_LIST,
    AnswerAPI.getMyAnswerList
);

export const setAnswer = createdAction(
    SET_ANSWER,
    AnswerAPI.setAnswer
);

export const modifyAnswer = createdAction(
    MODIFY_ANSWER,
    AnswerAPI.modifyAnswer
);

export const deleteAnswer = createdAction(
    DELETE_ANSWER,
    AnswerAPI.deleteAnswer
);

export const getMissionAnswerList = createdAction(
    GET_MISSION_ANSWER_LIST,
    AnswerAPI.getMissionAnswerList
);

export const getAnswer = createdAction(
    GET_ANSWER,
    AnswerAPI.getAnswer
);

export const getAnswerList = createdAction(
    GET_ANSWER_LIST,
    AnswerAPI.getAnswerList
);

export const setLikeAnswer = createdAction(
    SET_LIKE_ANSWER,
    AnswerAPI.setLikeAnswer
);

export const setAnswerComment = createdAction(
    SET_ANSWER_COMMENT,
    AnswerAPI.setAnswerComment
);

export const modifyAnswerComment = createdAction(
    MODIFY_ANSWER_COMMENT,
    AnswerAPI.modifyAnswerComment
);

export const deleteAnswerComment = createdAction(
    DELETE_ANSWER_COMMENT,
    AnswerAPI.deleteAnswerComment
);

export const getAnswerCommentList = createdAction(
    GET_ANSWER_COMMENT_LIST,
    AnswerAPI.getAnswerCommentList
);

// 초기상태
const initialState = {
    answerList: [],
    selectedAnswer: {
        answerId: '',
        email: '',
        title: '',
        missionId: '',
        javascriptCode: '',
        xmlCode: '',
        content: '',
        readCnt: '',
        likeCnt: '',
        commentCnt: '',
    },
    pageInfo: {
        pageisFirst: null,
        pageSize: 0,
        pageNumber: 0,
        pageTotalPages: 0,
        pageTotalElements: 0,
    },
    commentList: [],
}

// reducer 함수
const answerReducer = handleActions({

}, initialState);


const GET_MY_ANSWER_LIST = 'answer/GET_MY_ANSWER_LIST';
const SET_ANSWER = 'answer/SET_ANSWER';
const MODIFY_ANSWER = 'answer/MODIFY_ANSWER';
const DELETE_ANSWER = 'answer/DELETE_ANSWER';
const GET_MISSION_ANSWER_LIST = 'answer/GET_MISSION_ANSWER_LIST';
const GET_ANSWER = 'answer/GET_ANSWER';
const GET_ANSWER_LIST = 'answer/GET_ANSWER_LIST';
const SET_LIKE_ANSWER = 'answer/SET_LIKE_ANSWER';
const SET_ANSWER_COMMENT = 'answer/SET_ANSWER_COMMENT';
const MODIFY_ANSWER_COMMENT = 'answer/MODIFY_ANSWER_COMMENT';
const DELETE_ANSWER_COMMENT = 'answer/DELETE_ANSWER_COMMENT';
const GET_ANSWER_COMMENT_LIST = 'answer/GET_ANSWER_COMMENT_LIST';

// reducer 함수로 요청된 액션들을 처리하기 위한 함수
export default applyPenders(answerReducer, [
    {
        type: GET_MY_ANSWER_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        answerList: response.data,
                    });
                } else {
                    alert("리스트를 불러오는데 문제가 발생했습니다.");
                }
            } else {
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
        type: SET_ANSWER,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedAnswer: response.data,
                    });
                } else {
                    alert("미션을 만드는데 문제가 발생했습니다.");
                }
            } else {
                alert("미션을 만드는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: MODIFY_ANSWER,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedAnswer: response.data,
                    });
                } else {
                    alert("미션을 수정하는데 문제가 발생했습니다.");
                }
            } else {
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
        type: DELETE_ANSWER,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedAnswer: initialState.selectedAnswer,
                    });
                } else {
                    alert("미션을 삭제하는데 문제가 발생했습니다.");
                }
            } else {
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
        type: GET_MISSION_ANSWER_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        answerList: response.data,
                    });
                } else {
                    alert("리스트를 조회하는데 문제가 발생했습니다.");
                }
            } else {
                alert("리스트를 조회하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: GET_ANSWER,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedAnswer: response.data,
                    });
                } else {
                    alert("답안을 조회하는데 문제가 발생했습니다.");
                }
            } else {
                alert("답안을 조회하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: GET_ANSWER_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        answerList: response.data,
                    });
                } else {
                    alert("리스트를 조회하는데 문제가 발생했습니다.");
                }
            } else {
                alert("리스트를 조회하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: SET_LIKE_ANSWER,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                    });
                } else {
                    alert("좋아요 설정하는데 문제가 발생했습니다.");
                }
            } else {
                alert("좋아요 설정하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: SET_ANSWER_COMMENT,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                    });
                } else {
                    alert("댓글 작성에 문제가 발생했습니다.");
                }
            } else {
                alert("댓글 작성에 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: MODIFY_ANSWER_COMMENT,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                    });
                } else {
                    alert("댓글 수정에 문제가 발생했습니다.");
                }
            } else {
                alert("댓글 수정에 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: DELETE_ANSWER_COMMENT,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                    });
                } else {
                    alert("댓글 삭제에 문제가 발생했습니다.");
                }
            } else {
                alert("댓글 삭제에 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: GET_ANSWER_COMMENT_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        commentList: response.data,
                    });
                } else {
                    alert("댓글 조회하는데 문제가 발생했습니다.");
                }
            } else {
                alert("댓글 조회하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
]);
