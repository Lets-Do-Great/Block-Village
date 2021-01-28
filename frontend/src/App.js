import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import styles from './App.module.css';

import MissionMain from './components/blockly/mission_main/mission_main';
import TutorialMain from './components/blockly/tutorial_main/tutorial_main';
import Main from './components/main/main/main';
import MissionMaze from './components/blockly/mission_maze/mission_maze';
import BlockStoreContainer from './containers/block_store_container';
import ChallengeContainer from './containers/challenge_container';


import MyPageContainer from './containers/my_page_container';

import SubMain from './components/main/sub_main/sub_main';
import TestMypage from './components/my_page/test_mypage';



function App() {
  // const history = useHistory();

  // useEffect(() => {
  //   history.push('/main')
  // })

  return (
    <div className={styles.app}>

      <Switch>
        <Route exact path="/">
          <SubMain />
        </Route>
        
        <Route exact path="/my_page">
          <TestMypage />
          {/* <MyPageContainer /> */}
        </Route>

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
          <ChallengeContainer />
        </Route>

        <Route exact path="/main/block_store">
          <BlockStoreContainer />
        </Route>

        <Route exact path="/main/mission_main/maze_1">
          <MissionMaze />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
