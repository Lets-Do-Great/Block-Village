import React, { useEffect, useState } from 'react';
import BlocklyNavbar from '../../blockly_navbar/blockly_navbar';
import ChallengeList from '../challenge_list/challenge_list';
import styles from './challenge_main.module.css'

const ChallengeMain = ({ challengeList, setTodoChallenge }) => {
  // const [challenges, setChallenges] = useState(
  //   {
  //     challengeId: 1,
  //     title: '챌린지1 제목',
  //     startDate: '2021.01.15',
  //     endDate: '2021.02.10',
  //     peopleCnt: 1,
  //     image: '../../../../images/bug.png',
  //   },
  //   {
  //     challengeId: 2,
  //     title: '챌린지2 제목',
  //     startDate: '2021.03.15',
  //     endDate: '2021.08.10',
  //     peopleCnt: 2,
  //     image: '../../../../images/bug.png',
  //   },
  //   {
  //     challengeId: 3,
  //     title: '챌린지3 제목',
  //     startDate: '2021.05.15',
  //     endDate: '2021.10.10',
  //     peopleCnt: 3,
  //     image: '../../../../images/bug.png',
  //   },
  // );

  return (
    <div className={styles.body}>
      <BlocklyNavbar />
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
                setTodoChallenge={setTodoChallenge}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default ChallengeMain;