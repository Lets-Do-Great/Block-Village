import React, { useState } from 'react';

const CommentInputForm = ({ onChangeCommentInput, setComment }) => {
    return (<>
        <input onChange={onChangeCommentInput} />
        <button onChange={setComment}>댓글 달기</button>
    </>);
};

const CommentListForm = ({ userInfo, commentList, onChangeCommentInput,
                        commentInput, modifyComment, deleteComment }) => {
    return (<>
        { commentList.map(comment => (
            <CommentListLineForm
                key={comment.id}
                id={comment.id}
                userInfo={userInfo}
                email={email}
                nickname={comment.id}
                comment={comment}
                date={updated_at}
                onChangeCommentInput={onChangeCommentInput}
                modifyComment={modifyComment}
                deleteComment={deleteComment}/>
        ))}
    </>);
};

const CommentListLineForm = ({ id, userInfo, email, nickname, comment, date,
            onChangeCommentInput, commentInput, modifyComment, deleteComment }) => {

    const [modify, setModify] = useState(false);

    const onChangeModify = () => {
        setModify(true);
    }   

    const onSubmotComment = () => {
        modifyComment(id);
    }

    const onDeleteComment = () => {
        deleteComment(id);
    }

    return (<>
        { modify
        ? <>
            <input onChange={onChangeCommentInput} value={commentInput}/>
            <button onClick={onSubmotComment}>수정 완료</button>
        </>
        : <>
            [{nickname}]
            {comment}
            ({date})
            { userInfo === email && <>
                <button onClick={onChangeModify}>수정</button>
                <button onClick={onDeleteComment}>삭제</button>
                </>
            }
        </>
        }
        
    </>);
};

const CommentForm = ({ userInfo, commentList, commentInput, onChangeCommentInput, 
            setComment, modifyComment, deleteComment }) => {
    
    return (<>
        <CommentInputForm 
            onChangeCommentInput={onChangeCommentInput}
            setComment={setComment}/>
        <CommentListForm
            userInfo={userInfo}
            commentList={commentList}
            commentInput={commentInput}
            onChangeCommentInput={onChangeCommentInput}
            modifyComment={modifyComment}
            deleteComment={deleteComment}/>
    </>);
};

export default CommentForm;