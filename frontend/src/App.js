import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import styles from './App.module.css';

import MissionMain from './components/blockly/mission_main/mission_main';
import TutorialMain from './components/blockly/tutorial_main/tutorial_main';
import Main from './components/main/main/main';
import MissionMaze from './components/blockly/mission_maze/mission_maze';
import BlockStoreContainer from './containers/block_store_container';
import ChallengeContainer from './containers/challenge_container';

import { useSelector, useDispatch } from 'react-redux';
import { Route, Link, useHistory } from 'react-router-dom';
import MyPageContainer from './containers/my_page_container';
import UserContainer from './containers/user_container';
import SubMain from './components/main/sub_main';
import * as UserAction from './modules/user';



function App() {
  const history = useHistory();


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  const [ skip, setSkip ] = useState(false);

  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();

  const clickSkip = () => setSkip(true);

  const logout = async () => {
    setSkip(false);
    try{
      await dispatch(UserAction.logOut());
      history.push('/');
    } catch (e) {
        console.log(e);
    }
  }
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa



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
          <ChallengeContainer />
        </Route>

        <Route exact path="/main/block_store">
          <BlockStoreContainer />
        </Route>

        <Route exact path="/main/mission_main/maze_1">
          <MissionMaze />
        </Route>

      </Switch>



      {/* 수정 요망 */}
      <>
        { userInfo.logIn 
        ? ( <>
            <button onClick={logout}>로그아웃</button><br/>
            <Link to="/myPage">[ 마이페이지 ] </Link>
          </>)
        : (
            skip 
            ? <UserContainer setSkip={setSkip}/>
            : (<>
              <SubMain/>
              <button onClick={clickSkip}>건너뛰기</button>
              </>)
          )
        }

        <Route path="/myPage">
          <MyPageContainer/>
        </Route>
      </>
      {/*  */}



    </div>
  );
}

export default App;
