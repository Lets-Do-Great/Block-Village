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
<<<<<<< HEAD
import MissionCreateSubmain from './components/blockly/mission_create/mission_create_submain/mission_create_submain';
import MissionDoSubmain from './components/blockly/mission_do/mission_do_submain/mission_do_submain';
import EditorMissionContainer from './containers/editor_mission_container';
=======
import AnswerContainer from './containers/answer_container';
>>>>>>> developer


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





        <Route exact path="/main/block_store">
          <BlockStoreContainer />
        </Route>


        <Route exact path="/main/tutorial">
          <TutorialSubmain />
        </Route>
        




        <Route exact path="/main/mission">
          <MissionContainer />
        </Route>
        <Route exact path="/main/mission/create">
          <EditorMissionContainer />
        </Route>
        <Route exact path="/main/mission/update">

        </Route>
        <Route exact path="/main/mission/answer">
          <MissionDoSubmain />
        </Route>





        <Route exact path="/main/challenge">
          <ChallengeContainer />
        </Route>
        <Route exact path="/main/challenge/answer/">
          <MissionMaze />
        </Route>



        <Route exact path="/main/answer/:id" component={AnswerContainer}/>

      </Switch>
    </div>
  );
}

export default App;
