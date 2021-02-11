import { createAction, handleActions } from 'redux-actions';
import * as BoardAPI from '../service/board';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../service/common';
import { createElement } from 'react';

// board 관련 요청 액션 타입
const GET_BOARD_LIST = 'board/GET_BOARD_LIST';
const GET_BOARD = 'board/GET_BOARD';
const REGISTER_BOARD = 'board/REGISTER_BOARD';
const MODIFY_BOARD = 'board/MODIFY_BOARD';
const DELETE_BOARD = 'board/DELETE_BOARD';
const REGISTER_BOARD_COMMENT = 'board/REGISTER_BOARD';
const MODIFY_BOARD_COMMENT = 'board/MODIFY_COMMENT';
const DELETE_BOARD_COMMENT = 'board/DELETE_COMMENT';
const GET_BOARD_COMMENT_LIST = 'board/GET_BOARD_COMMENT_LIST';

// 액션 객체 생성함수
export const getBoardList = createAction(
    GET_BOARD_LIST,
    BoardAPI.getBoardList
)

export const getBoard = createAction(
    GET_BOARD,
    BoardAPI.getBoard
)

export const registerBoard = createAction(
    REGISTER_BOARD,
    BoardAPI.registerBoard
)

export const modifyBoard = createAction(
    MODIFY_BOARD,
    BoardAPI.modifyBoard
)

export const deleteBoard = createAction(
    DELETE_BOARD,
    BoardAPI.deleteBoard
)

export const registerBoardComment = createAction(
    REGISTER_BOARD_COMMENT,
    BoardAPI.registerBoardComment
)

export const modifyBoardComment = createAction(
    MODIFY_BOARD_COMMENT,
    BoardAPI.modifyBoardComment
)

export const deleteBoardComment = createAction(
    DELETE_BOARD_COMMENT,
    BoardAPI.deleteBoardComment
)

export const getBoardCommentList = createAction(
    GET_BOARD_COMMENT_LIST,
    BoardAPI.getBoardCommentList
)

// 초기 상태 - 공지사항 리스트
const initialState = {
    boardList: [],
    selectedBoard: {
        boardId: '',
        title: '',
        email: '',
        nickname: '',
        views: '', 
        createdAt: '', 
        updatedAt: ''
    },
    commentList: []
}

// reducer 함수
const boardReducer = handleActions({
    
}, initialState);

// reducer 함수로 요청된 액션
export default applyPenders(boardReducer, [
    {
        type: GET_BOARD_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.data) {
                    return updateObject(state, {
                        ...state,
                        boardList: response.data.data,
                    });
                } else {
                    alert("게시글을 불러오는데 문제가 발생했습니다.");
                }
            } else {
                alert("게시글을 불러오는데 문제가 발생했습니다.");
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
     },
    {
        type: GET_BOARD,
        onSuccess: (state, action) => {
            const response = action.payload;
            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedBoard: response.data.data,
                    });
                } else {
                    alert("게시글을 조회하는데 문제가 발생했습니다.");
                }
            } else {
                alert("게시글을 조회하는데 문제가 발생했습니다.");
            }
            return updateObject(state, state); 
        },
        onFailure: (state, action) => {
            return updateObject(state, state); 
        }
    },
    {
        type: REGISTER_BOARD,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedBoard: response.data.data,
                    });
                } else {
                    alert("게시글을 만드는데 문제가 발생했습니다.");
                }
            } else {
                alert("미션을 만드는데 문제가 발생했습니다.");
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: MODIFY_BOARD,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedBoard: response.data.data,
                    });
                } else {
                    alert("게시글을 수정하는데 문제가 발생했습니다.");
                }
            } else {
                alert("게시글을 수정하는데 문제가 발생했습니다.");
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: DELETE_BOARD,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        selectedBoard: initialState.selectedBoard,
                    });
                } else {
                    alert("게시글을 삭제하는데 문제가 발생했습니다.");
                }
            } else {
                alert("게시글을 삭제하는데 문제가 발생했습니다.");
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: REGISTER_BOARD_COMMENT,
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
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    },
    {
        type: MODIFY_BOARD_COMMENT,
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
        type: DELETE_BOARD_COMMENT,
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
        type: GET_BOARD_COMMENT_LIST,
        onSuccess: (state, action) => {
            const response = action.payload;

            if(response.status === 200) {
                if(response.data.status) {
                    return updateObject(state, {
                        ...state,
                        commentList: response.data.data,
                    });
                } else {
                    alert("댓글을 조회하는데 문제가 발생했습니다.");
                }
            } else {
                alert("댓글을 조회하는데 문제가 발생했습니다.");
                console.log(action.payload.status);
            }
            return updateObject(state, state);
        },
        onFailure: (state, action) => {
            return updateObject(state, state);
        }
    }
])