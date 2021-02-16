import React, { useEffect } from 'react';
import CommentForm from '../../comment_form/comment_form';
import styles from './board_detail.module.css';
import { MdArrowBack } from 'react-icons/md';
import * as Icon from 'react-icons/md';
import { CONTROLS_WHILEUNTIL_OPERATOR_UNTIL } from 'blockly/msg/en';

const BoardDetail = ({ detail, selectedBoard, userInfo, closeDetail, commentList, 
                      setComment, modifyComment, deleteComment}) => {

  const { nickname, title, content, createdDate, views } = selectedBoard;
  const date = createdDate.split("T");

  const onClick = () => {
    closeDetail();
  }
  
  return (<>
    <div className={styles.back}>
      <MdArrowBack 
          className={styles.back_icon}
          onClick={onClick}/>
      <button
          className={styles.button_back} 
          onClick={onClick}>목록으로</button>
    </div>

    <div className={styles.body}>
      <div className={styles.title}>{title}</div>
      <div className={styles.info}>
        <Icon.MdAccountCircle/> <div className={styles.info_text}>{nickname}</div>
        <Icon.MdEdit/> <div className={styles.info_text}>{date[0]} {date[1]}</div>
        <Icon.MdFace/> <div className={styles.info_text}>{views}</div>
      </div>
      <div className={styles.content}>{
        content.split('\n').map((line) => {
            return <span>{line}<br/></span>
          })}</div>
    </div>

    <div className={styles.comment_form}>
      <CommentForm
        userInfo={userInfo.email}
        commentList={commentList}
        setComment={setComment}
        modifyComment={modifyComment}
        deleteComment={deleteComment}/>
    </div>
  </>)
};

export default BoardDetail;