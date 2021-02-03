import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './App.module.css';

import Main from './components/main/main/main';
import MissionMaze from './components/blockly/mission_maze/mission_maze';
import BlockStoreContainer from './containers/block_store_container';
import ChallengeContainer from './containers/challenge_container';
import SubMain from './components/main/sub_main/sub_main';
import TutorialSubmain from './components/blockly/tutorial/tutorial_submain/tutorial_submain';
import MissionContainer from './containers/mission_container';

import TestMypage from './components/my_page/test_mypage';
import MissionCreateSubmain from './components/blockly/mission_create/mission_create_submain/mission_create_submain';


function App() {
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
          <TutorialSubmain />
        </Route>

        <Route exact path="/main/mission_main">
          <MissionContainer />
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

        <Route exact path="/main/mission_create">
          <MissionCreateSubmain />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
