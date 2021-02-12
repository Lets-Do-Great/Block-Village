import React, { useState } from 'react';
import * as Icon from "react-icons/md";
import styles from './comment_form.module.css';

const CommentInputForm = ({ setComment }) => {
    const [ setInput, setSetInput ] = useState('');

    const onChange = (e) => {
        setSetInput(e.target.value);
    }

    const onClick = () => {
        setComment(setInput);
        setSetInput('');
    }

    return (
    <div className={styles.input_form}>
        <input 
            className={styles.input} 
            onChange={onChange} 
            value={setInput}/>
        <button 
            className={styles.btn_submit_input}
            onClick={onClick}>댓글 달기</button>
    </div>);
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
                nickname={comment.nickname}
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

    return (
    <div className={styles.comment_list_form}>
        { modify
        ? <>
            <input 
                className={styles.input_modify}
                onChange={onChangeModifyInput} value={modifyInput}/>
            <button 
                className={styles.btn_submit_modify}
                onClick={onSubitComment}>수정 완료</button>
        </>
        : <>
            { userInfo === email && 
                <div className={styles.icon}>
                    <Icon.MdCreate
                        className={styles.icon_modify}
                        onClick={onChangeModify}/>
                    <Icon.MdDelete 
                        className={styles.icon_delete}
                        onClick={onDeleteComment}/>
                </div>
            }
            <div className={styles.nickname}>{nickname}</div>
            <div className={styles.comment}>{comment}</div>
            <div className={styles.date}>{date.split("T")[0]}</div>
        </>
        }
        
    </div>);
};

const CommentForm = ({ userInfo, commentList,
                             setComment, modifyComment, deleteComment }) => {

    return (
    <div className={styles.comment_form}>
        <CommentInputForm 
            setComment={setComment}/>
        <CommentListForm
            userInfo={userInfo}
            commentList={commentList}
            modifyComment={modifyComment}
            deleteComment={deleteComment}/>
    </div>);
};

export default CommentForm;