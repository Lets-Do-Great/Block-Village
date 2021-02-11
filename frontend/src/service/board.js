import client from './client';

// 공지사항 전체 목록 조회
export const getBoardList = (search) => {

    const { keywordType, keyword, pageNum, size, searchType } = search;
    return client({
        url: `boards?keywordType=${keywordType}&keyword=${keyword}&page=${pageNum}&size=${size}&sort=${searchType}`,
        method: 'get'
    });
}
    
// 특정 공지사항 조회
export const getBoard = ({ boardId }) => {
    return client({
        url: `boards/${boardId}`,
        method: 'get',
    });
};

// 공지사항 등록
export const registerBoard = (
    { email, title, content }) => {
        return client({
            url: `boards`,
            method: 'post',
            data: { email, title, content },
        }
    )
}

// 공지사항 수정
export const modifyBoard = (
    { boardId, email, title, content }) => {
        return client({
            url: `boards/${boardId}`,
            method: 'put',
            data: { email, title, content },
        }
    )
}

// 공지사항 삭제
export const deleteBoard = (
    { boardId }) => {
        return client({
            url: `boards/${boardId}`,
            method: 'delete',
        }
    )
}


// 특정 공지사항의 댓글 목록 조회
export const getBoardCommentList = ({ boardId }) => {
    return client({
        url: `boards/${boardId}/comments`, // 이거이거 
        method: 'get',
    })
}


// 공지사항에 댓글 작성
export const registerBoardComment = (
    { boardId, email, comment }) => {
        return client({
            url: `boards/${boardId}/comments`,
            method: 'post',
            data: { email, comment },
        }
    )
}

// 공지사항에 댓글 수정
export const modifyBoardComment = (
    { boardId, commentId, email, comment }) => {
        return client({
            url: `boards/${boardId}/comments/${commentId}`,
            method: 'put',
            data : { email, comment },
        }
    )
}

// 공지사항에 댓글 삭제
export const deleteBoardComment = (
    { boardId, commentId }) => {
        return client({
            url: `boards/${boardId}/comments/${commentId}`,
            method: 'delete',
        }
    )
}