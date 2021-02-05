import React, { useState } from 'react';

const CommentInputForm = ({ setComment }) => {
    const [ setInput, setSetInput ] = useState('');

    const onChange = (e) => {
        setSetInput(e.target.value);
    }

    const onClick = () => {
        setComment(setInput);
        setSetInput('');
    }

    return (<>
        <input onChange={onChange} value={setInput}/>
        <button 
            onClick={onClick}>댓글 달기</button>
    </>);
};

const CommentListForm = ({ userInfo, commentList,
                            modifyComment, deleteComment }) => {
    return (<>
        { commentList.map(comment => (
            <CommentListLineForm
                key={comment.id}
                id={comment.id}
                userInfo={userInfo}
                email={comment.email}
                nickname={comment.id}
                comment={comment.comment}
                date={comment.updated_at}
                modifyComment={modifyComment}
                deleteComment={deleteComment}/>
        ))}
    </>);
};

const CommentListLineForm = ({ id, userInfo, email, nickname, comment, date,
                                modifyComment, deleteComment }) => {

    const [ modify, setModify ] = useState(false);
    const [ modifyInput, setModifyInput ] = useState(comment);
 
    const onChangeModifyInput = (e) => {
        setModifyInput(e.target.value);
    }

    const onChangeModify = () => {
        setModify(true);
    }   

    const onSubitComment = () => {
        modifyComment(id, modifyInput);
        setModify(false);
    }

    const onDeleteComment = () => {
        deleteComment(id);
    }

    return (<>
        { modify
        ? <>
            <input onChange={onChangeModifyInput} value={modifyInput}/>
            <button onClick={onSubitComment}>수정 완료</button>
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

const CommentForm = ({ userInfo, commentList,
                             setComment, modifyComment, deleteComment }) => {

    return (<>
        <CommentInputForm 
            setComment={setComment}/>
        <CommentListForm
            userInfo={userInfo}
            commentList={commentList}
            modifyComment={modifyComment}
            deleteComment={deleteComment}/>
    </>);
};

export default CommentForm;