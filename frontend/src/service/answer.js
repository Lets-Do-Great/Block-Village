import client from './client';

// 나의 답안 목록 조회
export const getMyAnswerList = ({ email }) => {
    return client({
        url: `answer/user/${email}`,
        method: 'get',
    });
};

// 답안 제작
export const setAnswer = ({ email, missionId, title,
                 content, javascriptCode, xmlCode }) => {
    return client({
       url: `answer/${email}`,
       method: 'post',
       data: { email, missionId, title, content, javascriptCode, xmlCode },
    });
};

// 답안 수정
export const modifyAnswer = ({ email, answerId, title, 
                content, javascriptCode, xmlCode }) => {
    return client({
        url: `answer/${answerId}`,
        method: 'put',
        data: { email, answerId, title, content, javascriptCode, xmlCode },
    });
};

// 답안 삭제
export const deleteAnswer = ({ email, answerId }) => {
    return client({
        url: `answer/${answerId}`,
        method: 'delete',
        data: { email, answerId },
    })
};

// 특정 미션의 답안 목록 조회
export const getMissionAnswerList = ({ id }) => {
    return client({
       url: `answer/${id}`,
       method: 'get', 
    });
};

// 답안 1개 조회
export const getAnswer = ({ email, answerId }) => {
    return client({
       url: `answer/${email}/${answerId}`,
       method: 'get', 
    });
}

// 전체 미션 답안 목록 조회
export const getAnswerList = ({ keyword, keywordType, 
                                searchType, sortType, pageNum }) => {
    return client({
        url: `answer`,
        method: 'post',
        data: { keyword, keywordType, searchType, sortType, pageNum },
    });
};

// 답안 좋아요
export const setLikeAnswer = ({ email, answerId, favorite }) => {
    return client({
        url: 'answer/like',
        method: 'post',
        data: { email, answerId, favorite },
    });
};

// 특정 답안 댓글 작성
export const setAnswerComment = ({ email, answerId, comment }) => {
    return client({
        url: `answer/comment/${email}`,
        method: 'post',
        data: { email, answerId, comment },
    })
};

// 특정 답안 댓글 수정
export const modifyAnswerComment = ({ email, commentId, comment}) => {
    return client({
        url: `answer/comment/${commentId}`,
        method: 'put',
        data: { email, commentId, comment },
    });
}

// 특정 답안 댓글 삭제
export const deleteAnswerComment = ({ email, commentId }) => {
    return client({
        url: `answer/comment/${commentId}`,
        method: 'delete',
        data: { email, commentId },
    });
}

// 특정 답안 댓글 목록 조회
export const getAnswerCommentList = ({ answerId }) => {
    return client({
        url: `answer/comment/${answerId}`,
        method: 'get',
    });
};
