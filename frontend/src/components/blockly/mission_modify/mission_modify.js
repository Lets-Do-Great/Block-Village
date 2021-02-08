import React, { useRef } from 'react';
import styles from './mission_modify.module.css'

const MissionModify = ({ title, content, onModifyMission, closeModal }) => {
  // props로 title content 받아서 value로 주면 끝!

  const formRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const titleContent = {
      title: titleRef.current.value || '',
      content: contentRef.current.value || '',
    };
    formRef.current.reset();
    
    // 여기 밑에 props로 받은 function에 titleContent 담아서 보내면 됨.
    onModifyMission(titleContent)
  };


  return (
    <>
      <form ref={formRef}>
        <h3>{title}</h3><br/>
        <input 
          type="text" 
          ref={titleRef} 
          name="title"
          value={title}
        /><br/>

        <h3>{content}</h3><br/>
          <textarea 
            ref={contentRef}
            name="content"
            value={content}
          /><br/>
        <button onClick={onSubmit}>수정하기</button>
        <button onClick={closeModal}>이전</button>
      </form>
    </>
  )
}

export default MissionModify;