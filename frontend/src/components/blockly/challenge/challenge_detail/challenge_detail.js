import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './challenge_detail.module.css';

const ChallengeDetail = ({ id, img, setTodoChallenge, todo }) => {
  const history = useHistory();

  const onSetTodoChallenge = () => {
    setTodoChallenge(id);
  };

  const goToAnswer = () => {
    history.push(`/main/challenge/answer`);
  }


  return (
    <div className={styles.body}>
      <img className={styles.img} src={img}/><br/>
      <div>
        { !todo && 
          <button 
            className={styles.participate_button}
            onClick={onSetTodoChallenge}>
              챌린지 참가하기</button> }
              
        { todo === 'todo' && 
          <button 
            className={styles.participating_button}
            onClick={goToAnswer}>
              챌린지 참여중</button> 
        } 

        { todo === 'done' && 
          <button
            className={styles.participated_button}>
              참여 완료!</button> 
        }

        { todo === 'disable' && 
          <button disabled
            className={styles.disable_button} >
              참여 종료!</button> 
        }
        <img className={styles.fake}/>
      </div>
    </div>
  )
};

export default ChallengeDetail;