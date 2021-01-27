import React, { useState } from 'react';
import ChallengeDetail from '../challenge_detail/challenge_detail';
import styles from './challenge_list.module.css'

const ChallengeList = ({ challenge }) => {
  const [detail, setDetail] = useState(false);

  return (
    <div className={styles.body}>
      <h1 onClick={() => { setDetail(!detail) }}>{challenge.title}</h1>
      {detail && 
        <ChallengeDetail 
        
        />}
    </div>
  )
};

export default ChallengeList;