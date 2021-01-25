import React from 'react';
import { Route, Link } from 'react-router-dom';
import MyPageContainer from './containers/my_page_container';
import UserContainer from './containers/user_container';

function App() {
  return (
    <>
      <Link to="/user">[ 회원 관리 ] </Link>
      <Link to="/mypage">[ 마이페이지 ] </Link>

      <Route path="/user">
        <UserContainer/>
      </Route>
      <Route path="/mypage">
        <MyPageContainer/>
      </Route>
    </>
  );
}

export default App;
