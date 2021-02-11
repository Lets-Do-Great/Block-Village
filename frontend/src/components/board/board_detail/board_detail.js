import React from 'react';
import styles from './board_detail.module.css';

const BoardDetail = ({ detail, selectedBoard, userInfo, closeDetail, onModify, onDelete}) => {

  const { nickname, title, content, updatedDate, views } = selectedBoard;

  const onClick = () => {
    closeDetail();
  }

  return (<>
    <div className={styles.body}>
      <button className={styles.button} onClick={onClick}>뒤로가기</button>
      <h1>{title}</h1>
        <div className={styles.content}>
          <h6>작성자 : {nickname}</h6>
          <h6>내용 : {content}</h6>
          <h6>작성 날짜 : {updatedDate}</h6>
          <h6>조회 수 :{views}</h6>
        </div>
    </div>
  </>)
};

export default BoardDetail;