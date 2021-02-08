import React, { useEffect, useRef, useState } from 'react';
import styles from './mission_create_modal.module.css';

const MissionCreateModal = ({ formInfo, onChangeModal, updateState, title, onChangeTC }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const difficultyRef = useRef();
  const contentRef = useRef();

  const [buttonName, setButtonName] = useState('미션 제작 완료');

  const onSubmit = (event) => {
    event.preventDefault();
    const titleContent = {
      title: titleRef.current.value || '',
      difficulty: difficultyRef.current.value || 0,
      content: contentRef.current.value || '',
    };
    formRef.current.reset();
    // onChangeTC(titleContent)
    onChangeTC();
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateState({
      ...formInfo,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  };
  
  // useEffect(() => {
  //   title && setButtonName('미션 수정 완료')
  // })

  return (
    <>
     <div className={styles.modal_background} />
      <div className={styles.body}>
        <form ref={formRef}>

          <h3>제목</h3><br/>
          <input 
            type="text" 
            ref={titleRef} 
            name="title"
            onChange={onChange} 
          /><br/>

          <h3>당신이 생각하는 난이도!</h3><br/>
          <input 
            type="number" 
            ref={difficultyRef} 
            name="difficulty"
            onChange={onChange}
          /><br/>

          <h3>미션 설명</h3><br/>
          <textarea 
            ref={contentRef}
            name="content"
            onChange={onChange}
          /><br/>

          <button onClick={onSubmit}>{buttonName}</button>
        </form>
        <button onClick={onChangeModal}>이전</button>
      </div>
    </>
  )
};

export default MissionCreateModal;