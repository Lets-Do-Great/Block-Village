import React from 'react';
import styles from './board_detail.module.css';
import { MdArrowBack } from 'react-icons/md';
import * as Icon from 'react-icons/md';

const BoardDetail = ({ detail, selectedBoard, userInfo, closeDetail, onModify, onDelete}) => {

  const { nickname, title, content, updatedDate, views } = selectedBoard;
  const date = updatedDate.split("T");
  const time = date[1].split(".");

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
        <Icon.MdEdit/> <div className={styles.info_text}>{date[0]} {time[0]}</div>
        <Icon.MdFace/> <div className={styles.info_text}>{views}</div>
      </div>
      <div className={styles.content}>{content}</div>
    </div>
  </>)
};

export default BoardDetail;