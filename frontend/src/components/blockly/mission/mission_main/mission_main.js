import React, { useState } from 'react';
import styles from './mission_main.module.css';
import { useHistory } from 'react-router-dom';
import MissionNavbar from '../mission_navbar/mission_navbar';
import MissionMenu from '../mission_menu/mission_menu';

const MissionMain = (props) => {
  const [missions, setMissions] = useState('좋아요 순');

  const [menu_content, setMenu_content] = useState(0);
  const history = useHistory();

  const goMaze_1 = () => {
    history.push('/main/mission_main/maze_1')
  };

  const getLike = () => {
    setMissions('Like')
  };

  const getNew = () => {
    setMissions('getNew')
  };

  const getPeople = () => {
    setMissions('getPeople')
  };

  const getComment = () => {
    setMissions('getComment')
  };

  return (
    <div className={styles.body}>
      <MissionNavbar />
      <div className={styles.container}>
        <div className={styles.tab_menus}>

          <ul className={styles.tabs}>
            <li className={styles.current}>좋아요</li>
            <li>신작</li>
            <li>댓글</li>
            <li>난이도</li>
          </ul>


          <MissionMenu missions={missions}/>

        </div>
      </div>
    </div>
  )
};

export default MissionMain;