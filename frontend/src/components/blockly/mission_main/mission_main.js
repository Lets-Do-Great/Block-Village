import React from 'react';
import styles from './mission_main.module.css';
import { useHistory } from 'react-router-dom';
import BlocklyNavbar from '../blockly_navbar/blockly_navbar';

const MissionMain = (props) => {
  const history = useHistory();

  const goMaze_1 = () => {
    history.push('/main/mission_main/maze_1')
  }

  return (
    <div className={styles.header}>
      {/* <BlocklyNavbar /> */}
      <div className={styles.body}>
        <div className={styles.card}>
          <div className={styles.image}></div>

          <div className={styles.section}>
            <span className={styles.date}>4 days ago</span>
            <h2>미로 1</h2>
            <button onClick={goMaze_1}>start</button>
          </div>

          <div className={styles.stats}>

            <div className={styles.stat}>
              <div className={styles.value}>좋아요</div>
              <div className={styles.type}>13546</div>
            </div>
            
            <div className={`${styles.stat} ${styles.border}`}>
              <div className={styles.value}>푼 사람</div>
              <div className={styles.type}>4632</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.value}>난이도</div>
              <div className={styles.type}>7.5</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

export default MissionMain;