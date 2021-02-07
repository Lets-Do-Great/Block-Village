import React from 'react';
import styles from './challenge_detail.module.css';

const ChallengeDetail = ({ challengeId, img, setTodoChallenge, todo }) => {

  const onSetTodoChallenge = () => {
    setTodoChallenge(challengeId);
  };

  return (
    <div className={styles.body}>
      <img className={styles.img} src={img}/><br/>
      { todo === 'todo' && 
        <button>참여중</button> 
        // 내가 제작중인 답안으로 가게하기
      } 

      { todo === 'done' && 
        <button>참여완료!</button> 
        // 다른 사람들의 답안 보러 가기..?
      }

      { !todo && 
        <button onClick={onSetTodoChallenge}>참가하기</button> }
    </div>
  )
};

export default ChallengeDetail;