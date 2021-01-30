import React from 'react';
import styles from './mission_main.module.css';
import { useHistory } from 'react-router-dom';
import MissionNavbar from '../mission_navbar/mission_navbar';

const MissionMain = (props) => {
  const history = useHistory();

  const goMaze_1 = () => {
    history.push('/main/mission_main/maze_1')
  }

  return (
    <div className={styles.body}>
      <MissionNavbar />
      <div className={styles.container}>
        
      </div>
    </div>
  )
};

export default MissionMain;