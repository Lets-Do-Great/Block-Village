import React, { useState } from 'react';
import ChallengeDetail from '../challenge_detail/challenge_detail';
import styles from './challenge_list.module.css'

const ChallengeList = ({ challenge, setTodoChallenge }) => {
  const [detail, setDetail] = useState(false);
  
  const { challengeId, startDate, endDate, peopleCnt, img, todo } = challenge;

  return (
    <div className={styles.body}>
      <div>{ challengeId }</div>
      <div 
        className={styles.title}
        onClick={() => { setDetail(!detail) }}>{challenge.title}</div>
          
      <div>{ startDate } - { endDate }</div>
      <div>{ peopleCnt }</div>
          
      { detail && 
      <ChallengeDetail 
          id={challengeId}
          img={img}
          setTodoChallenge={setTodoChallenge}
          todo={todo}
      />}
    </div>
  )
};

export default ChallengeList;