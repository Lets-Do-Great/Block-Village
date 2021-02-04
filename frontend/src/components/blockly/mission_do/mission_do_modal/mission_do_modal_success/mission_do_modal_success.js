import React, { useRef }  from 'react';
import styles from './mission_do_modal_success.module.css';

const MissionDoModalSuccess = ({ onChangedifficulty }) => {
  const formRef = useRef();
  const difficultyRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const difficulty = difficultyRef.current.value || 0
    formRef.current.reset();
    onChangedifficulty(difficulty)
  };

  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <form ref={formRef}>
          <h3>당신이 생각하는 난이도!</h3><br/>
          <input type="number" ref={difficultyRef} /><br/>
          <button onClick={onSubmit}>제출하기</button>
        </form>
      </div>
    </>
  )
}

export default MissionDoModalSuccess;