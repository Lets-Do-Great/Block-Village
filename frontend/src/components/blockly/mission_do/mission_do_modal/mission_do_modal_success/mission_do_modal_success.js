import React, { useRef }  from 'react';
import styles from './mission_do_modal_success.module.css';

const MissionDoModalSuccess = ({ setUseDifficulty, onSubmitDifficulty }) => {
  const formRef = useRef();
  const difficultyRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    formRef.current.reset();
    onSubmitDifficulty()
  };  

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    setUseDifficulty(event.currentTarget.value * 1.0)
  };
  
  return (
    <>
      <div className={styles.modal_background} />
      <div className={styles.body}>
        <form ref={formRef}>
          <h3>당신이 생각하는 난이도!</h3><br/>
          <input 
            type="number" 
            name="difficulty" 
            ref={difficultyRef}
            onChange={onChange} 
          /><br/>
          <button onClick={onSubmit}>제출하기</button>
        </form>
      </div>
    </>
  )
}

export default MissionDoModalSuccess;