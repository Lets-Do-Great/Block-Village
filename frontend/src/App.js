import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Link, useHistory } from 'react-router-dom';
import MyPageContainer from './containers/my_page_container';
import UserContainer from './containers/user_container';
import SubMain from './components/main/sub_main';
import * as UserAction from './modules/user';

function App() {
  const history = useHistory();
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

  return (
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
  );
}

export default App;
