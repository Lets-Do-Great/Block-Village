import React, { useEffect, useRef, useState } from 'react';
import styles from './mission_create_modal.module.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const MissionCreateModal = ({ formInfo, onChangeModal, updateState, title, onChangeTC, onChangeDifficulty }) => {
  const formRef = useRef();
  const titleRef = useRef();
  const difficultyRef = useRef();
  const contentRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const titleContent = {
      title: titleRef.current.value || '',
      difficulty: value || 0,
      content: contentRef.current.value || '',
    };
    formRef.current.reset();
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

  //==============================================================
  const labels = {
    0.5: '0.5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
  };
  const [value, setValue] = React.useState(2.5);
  const [hover, setHover] = React.useState(-1);

  const changeDifficulty = (event) => {
    onChangeDifficulty(event * 1.0)
  }

  return (
    <>
     <div className={styles.modal_background} />
      <div className={styles.body}>
        <h1>제작 성공!</h1>

        <form ref={formRef} className={styles.form}>

          <div className={styles.text}>미션 제목</div>
          <input 
            type="text" 
            ref={titleRef} 
            name="title"
            className={styles.titleInput}
            onChange={onChange} 
          />

          <div className={styles.text}>당신이 생각하는 난이도!</div>
          <div className={styles.diff}>
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
                changeDifficulty(newValue)
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            />
            {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
          </div>

          <div className={styles.text}>미션 설명</div>
          <textarea 
            ref={contentRef}
            name="content"
            onChange={onChange}
            className={styles.textarea}
          />
          <div>

            <button className={styles.submit__btn} onClick={onSubmit}>미션 제작 완료</button>
            <button className={styles.back__btn} onClick={onChangeModal}>이전</button>
          </div>
        </form>
      </div>
    </>
  )
};

export default MissionCreateModal;