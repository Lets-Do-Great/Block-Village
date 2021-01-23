import React from 'react';
import { useHistory } from 'react-router-dom';

const MissionMain = (props) => {
  const history = useHistory();

  const goMaze_1 = () => {
    history.push('/main/mission_main/maze_1')
  }

  return (
    <div>
      <button onClick={goMaze_1}>미로 1</button>
    </div>
  )
};

export default MissionMain;