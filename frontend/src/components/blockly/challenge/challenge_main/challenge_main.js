import React, { useState } from 'react';
import BlocklyNavbar from '../../blockly_navbar/blockly_navbar';
import ChallengeList from '../challenge_list/challenge_list';
import styles from './challenge_main.module.css'

const ChallengeMain = (props) => {
  const [challenges, setChallenges] = useState([
    {
      c_num: 1,
      title: 'dum_data1',
      start_date: '2021-01-15',
      end_date: '2021-02-10',
      p_cnt: 564893,
      image: '이미지',
      content: '설명',
    },
    {
      c_num: 2,
      title: 'dum_data2',
      start_date: '2021-03-15',
      end_date: '2021-08-10',
      p_cnt: 564893,
      image: '이미지',
      content: '설명',
    },
    {
      c_num: 3,
      title: 'dum_data3',
      start_date: '2021-05-15',
      end_date: '2021-10-10',
      p_cnt: 564893,
      image: '이미지',
      content: '설명',
    },
  ]);

  return (
    <div className={styles.body}>
      <BlocklyNavbar />
      <div className={styles.container}>
        <div className={styles.lists}>
          {
            challenges.map((challenge) => (
              <ChallengeList 
                key={challenge.c_num}
                challenge={challenge}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default ChallengeMain;