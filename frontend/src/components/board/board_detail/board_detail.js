import React from 'react';
import styles from './board_detail.module.css';
import { MdArrowBack } from 'react-icons/md';
import * as Icon from 'react-icons/md';

const BoardDetail = ({ detail, selectedBoard, userInfo, closeDetail, onModify, onDelete}) => {

  const { nickname, title, content, createdDate, views } = detail;
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
      <div className={styles.content}>{content}</div>
    </div>
  </>)
};

export default BoardDetail;