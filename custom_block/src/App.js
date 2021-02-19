import { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import styles from './App.module.css';
import ChallengeMain from './components/blockly/challenge_main/challenge_main';
import MissionMain from './components/blockly/mission_main/mission_main';
import TutorialMain from './components/blockly/tutorial_main/tutorial_main';
import BlockStore from './components/blockly/block_store/block_store';
import Main from './components/main/main';
import MissionMaze from './components/blockly/mission_maze/mission_maze';

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push('/main')
  })

  return (
    <div className={styles.app}>

      <Switch>
        <Route exact path="/main">
          <Main />
        </Route>
        <Route exact path="/main/tutorial_main">
          <TutorialMain />
        </Route>
        <Route exact path="/main/mission_main">
          <MissionMain />
        </Route>
        <Route exact path="/main/challenge_main">
          <ChallengeMain />
        </Route>
        <Route exact path="/main/block_store">
          <BlockStore />
        </Route>

        <Route exact path="/main/mission_main/maze_1">
          <MissionMaze />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
