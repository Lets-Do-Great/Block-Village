import React, { useRef, useState } from 'react';
import styles from './mission_modify.module.css'

const MissionModify = ({ title, content, onModifyMission, closeModal }) => {
  // props로 title content 받아서 value로 주면 끝!
  const [ modifyInput, setModifyInput ] = useState({
    title: title,
    content: content,
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setModifyInput({
      ...modifyInput,
      [name]: value,
    })
  };

  const onSubmit = () => {
    onModifyMission(modifyInput);
    closeModal();
  };

  return (
    <>
      <div className={styles.mission_modify}>
        <input 
          type="text" 
          name="title"
          value={modifyInput.title}
          placeholder="미션 제목"
          onChange={onChange}
          className={styles.titleInput}/>
        <textarea 
          name="content"
          value={modifyInput.content}
          placeholder="미션 내용"
          onChange={onChange}
          className={styles.contentInput}/><br/>
        <button 
          className={styles.btn_submit_modify}
          onClick={onSubmit}>
            수정하기</button>
        <button
          className={styles.btn_go_back} 
          onClick={closeModal}>
            이전</button>
      </div>
    </>
  )
}

export default MissionModify;