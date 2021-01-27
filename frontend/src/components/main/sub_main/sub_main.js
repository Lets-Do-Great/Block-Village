import React, { useState } from 'react';

import styles from './sub_main.module.css'

import { useSelector } from 'react-redux';

import UserContainer from '../../../containers/user_container';

const SubMain = () => {
  const [ skip, setSkip ] = useState(false);

  const userInfo = useSelector(state => state.user.userInfo);
  // const dispatch = useDispatch();

  const clickSkip = () => setSkip(true);



  return (
    <>
      { 
        !userInfo.logIn &&
        (<>
            <div>간략한 영상이나 이미지 </div><br/>
            skip ? 
              <UserContainer setSkip={setSkip}/>: 
              (
                <>
                  <SubMain/>
                  <button onClick={clickSkip}>건너뛰기</button>
                </>
              )
        </>)
      }
    </>    
  );
};

export default SubMain;