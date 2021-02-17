import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import styles from './App.module.css';

import Main from './components/main/main/main';
import MissionMaze from './components/blockly/mission_maze/mission_maze';
import BlockStoreContainer from './containers/block_store_container';
import ChallengeContainer from './containers/challenge_container';
import SubMain from './components/main/sub_main/sub_main';
import TutorialSubmain from './components/blockly/tutorial/tutorial_submain/tutorial_submain';
import MissionContainer from './containers/mission_container';

import EditorAnswerContainer from './containers/editor_answer_container';
import EditorMissionContainer from './containers/editor_mission_container';
import AnswerContainer from './containers/answer_container';
import BoardContainer from './containers/board_container';

import UserInfoFromToken from './containers/user_info_from_token';
import client from './service/client'
import MyPageSubmain from './components/my_page/my_page_submain/my_page_submain';
import ServiceMain from './components/service_intro/service_main/service_main';
import ModifyAnswerContainer from './containers/modify_answer_container';

function App() {
  const history = useHistory();
  const [ userInfoFromToken, setUserInfoFromToken ] = useState({});
  const [ callAction, setCallAction ] = useState(false);

  useEffect(() => {    
    const token = localStorage.getItem('token');

    if(token){
      const tokenDecode = jwt_decode(token);
      const { exp, userInfo } = tokenDecode;
      client.defaults.headers.common['token'] = token;
      if( exp > new Date().getTime() / 1000 ) {
        setUserInfoFromToken(userInfo);
        history.push('/main');
      } else {
        history.push('/');
      }
    } else{
      history.push('/');
    }
  }, []);

  useEffect(() => {
    setCallAction(true);
  }, [ userInfoFromToken] );


  return (
    <div className={styles.app}>
      { callAction && 
          <UserInfoFromToken 
                userInfo={userInfoFromToken}
                setCallAction={setCallAction}/> 
      }

      <Switch>

        <Route exact path="/">
          <SubMain />
        </Route>

        <Route exact path="/my_page">
          <MyPageSubmain />
        </Route>

        <Route exact path="/main">
          <Main />
        </Route>

        <Route exact path="/main/service_introduction">
          <ServiceMain />
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
          <EditorMissionContainer type="create" />
        </Route>
        <Route exact path="/main/mission/update">

        </Route>

        <Route exact path="/main/mission/answer_modify">
          <ModifyAnswerContainer />
        </Route>





        <Route exact path="/main/challenge">
          <ChallengeContainer />
        </Route>
        {/* <Route exact path="/main/create/answer/:type" component={EditorAnswerContainer}/> */}

        <Route exact path="/main/answer/:id" component={AnswerContainer}/>

        <Route exact path="/main/board">
          <BoardContainer />
        </Route>




        <Route exact path="/main/create/answer/:type" component={EditorAnswerContainer} />

      </Switch>
    </div>
  );
}

export default App;
