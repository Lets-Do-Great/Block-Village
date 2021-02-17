import React, { useState, useEffect } from 'react';

import styles from './sub_main.module.css';

import UserContainer from '../../../containers/user_container';

const SubMain = () => {
  const [ skip, setSkip ] = useState(false);

  const clickSkip = () => setSkip(true);

  return (
    <>
      <img 
      className={styles.background_img}
      src= "/images/subMain_img.png"
      />
      {
        skip 
        ? <>
            <div className={styles.background_black} />
            <div className={styles.user_container} >
              <UserContainer setSkip={setSkip}/> 
            </div>
          </>
        : <button 
          className={styles.skip_button}
          onClick={clickSkip}>로그인 하러 가기</button>
      }
    </>    
  );
};

export default SubMain;