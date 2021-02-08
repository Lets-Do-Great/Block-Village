import React, { useState } from 'react';
import ChallengeDetail from '../challenge_detail/challenge_detail';
import styles from './challenge_list.module.css'

const ChallengeList = ({ challenge, setTodoChallenge }) => {
  const [detail, setDetail] = useState(false);
  
  const { challengeId, startDate, endDate, peopleCnt, img, todo } = challenge;

  return (
    <div className={styles.body}>
      <div className={styles.challenge_no}>
        { challengeId }</div>
      <div 
        className={styles.challenge_name}
        onClick={() => { setDetail(!detail) }}>
          {challenge.title}</div>
      <div 
        className={styles.challenge_date}>
          { startDate } - { endDate }</div>
      <div
        className={styles.challenge_people_cnt}>
          { peopleCnt }</div>
          
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