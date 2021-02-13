import React from 'react';
import styles from './challenge_detail.module.css';

const ChallengeDetail = ({ id, img, setTodoChallenge, todo }) => {

  const onSetTodoChallenge = () => {
    setTodoChallenge(id);
  };

  const goToAnswer = () => {
    // history.push(`/main/challenge/answer`);
  }

  const goToAnswerList= () => {
    // history.push(`/main/answer/${id}`);
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
            // 내가 제작중인 답안으로 가게하기
        } 

        { todo === 'done' && 
          <button
            className={styles.participated_button} 
            onClick={goToAnswerList}>
              참여 완료! 다른 답안 보러 가기</button> 
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