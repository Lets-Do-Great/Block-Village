import React, { useEffect, useState } from 'react';
import Nav from '../../../nav/nav';
import ChallengeList from '../challenge_list/challenge_list';
import styles from './challenge_main.module.css'

const ChallengeMain = ({ challengeList, setTodoChallenge }) => {
  return (
    <div className={styles.body}>
      <Nav type="challenge"/>
      <div className={styles.container}>
        <div className={styles.lists}>
          <div className={styles.challenge_header}>
            <div className={styles.challenge_no}>번호</div>
            <div className={styles.challenge_name}>챌린지 명</div>
            <div className={styles.challenge_date}>진행 기간</div>
            <div className={styles.challenge_people_cnt}>참가자 수</div>
          </div>
          {
            challengeList.map((challenge) => (
              <ChallengeList 
                key={challenge.challengeId}
                challenge={challenge}
                setTodoChallenge={setTodoChallenge}/>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default ChallengeMain;