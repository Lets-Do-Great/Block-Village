import React, { useState } from 'react';

import styles from './sub_main.module.css';

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
            <img 
            className={styles.background_img}
            src= "/images/subMain_img.png"
            />
            {
              skip 
              ? <div className={styles.user_container} >
                <UserContainer setSkip={setSkip}/> 
                </div>
              : <button 
                className={styles.skip_button}
                onClick={clickSkip}>건너뛰기</button>
            }
        </>)
      }
    </>    
  );
};

export default SubMain;