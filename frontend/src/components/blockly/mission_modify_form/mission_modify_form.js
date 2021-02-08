import React, { useRef } from 'react';
import styles from './mission_modify_form.module.css'

const MissionModifyForm = ({ title, content, onModifyMission }) => {
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

  const goBack = () => {
    console.log();
    // 이전 버튼 실행해야함
  };


  return (
    <>
      <form ref={formRef}>
        <h3>제목</h3><br/>
        <input 
          type="text" 
          ref={titleRef} 
          name="title"
          value={title}
        /><br/>

        <h3>미션 설명</h3><br/>
          <textarea 
            ref={contentRef}
            name="content"
            value={content}
          /><br/>
        <button onClick={onSubmit}>수정하기</button>
        <button onClick={goBack}>이전</button>
      </form>
    </>
  )
}

export default MissionModifyForm;