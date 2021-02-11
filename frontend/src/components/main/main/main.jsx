import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './main.module.css'

import { useHistory } from 'react-router-dom';
import Nav from '../../nav/nav';

import ScrollContainer from 'react-indiana-drag-scroll'

import * as UserAction from '../../../modules/user';
import { useDispatch } from 'react-redux';


const Main = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const main_ref = useRef();
  const back_back = useRef();

  const chalenge_img = useRef();
  const makeMission_img = useRef();
  const participateMission_img = useRef();
  const myPage_img = useRef();
  const tutorial_img = useRef();
  const logout_img = useRef();
  const board_img = useRef();
  const service_img = useRef();
  const store_img = useRef();


  useEffect(() => {
    const item = main_ref.current;

    item.style.width = `${5760*(back_back.current.clientHeight/1081)}px`;

    const x = (5760*(back_back.current.clientHeight/1081))/5760;
    const y = back_back.current.clientHeight/1081;

    chalenge_img.current.style.width = `${590 * x}px`;
    chalenge_img.current.style.height = `${560 * y}px`;

    makeMission_img.current.style.width = `${500 * x}px`;
    makeMission_img.current.style.height = `${480 * y}px`;

    participateMission_img.current.style.width = `${440 * x}px`;
    participateMission_img.current.style.height = `${420 * y}px`;

    myPage_img.current.style.width = `${510 * x}px`;
    myPage_img.current.style.height = `${430 * y}px`;

    tutorial_img.current.style.width = `${800 * x}px`;
    tutorial_img.current.style.height = `${420 * y}px`;

    logout_img.current.style.width = `${270 * x}px`;
    logout_img.current.style.height = `${290 * y}px`;

    board_img.current.style.width = `${300 * x}px`;
    board_img.current.style.height = `${270 * y}px`;

    service_img.current.style.width = `${460 * x}px`;
    service_img.current.style.height = `${460 * y}px`;

    store_img.current.style.width = `${440 * x}px`;
    store_img.current.style.height = `${530 * y}px`;
  })


  // 나름 반응형을 위한 def
  const changeSize = () => {
    const item = main_ref.current;

    item.style.width = `${5760*(back_back.current.clientHeight/1081)}px`;

    const x = (5760*(back_back.current.clientHeight/1081))/5760;
    const y = back_back.current.clientHeight/1081;

    chalenge_img.current.style.width = `${590 * x}px`;
    chalenge_img.current.style.height = `${560 * y}px`;

    makeMission_img.current.style.width = `${500 * x}px`;
    makeMission_img.current.style.height = `${480 * y}px`;

    participateMission_img.current.style.width = `${440 * x}px`;
    participateMission_img.current.style.height = `${420 * y}px`;

    myPage_img.current.style.width = `${510 * x}px`;
    myPage_img.current.style.height = `${430 * y}px`;

    tutorial_img.current.style.width = `${800 * x}px`;
    tutorial_img.current.style.height = `${420 * y}px`;

    logout_img.current.style.width = `${270 * x}px`;
    logout_img.current.style.height = `${290 * y}px`;

    board_img.current.style.width = `${300 * x}px`;
    board_img.current.style.height = `${270 * y}px`;

    service_img.current.style.width = `${460 * x}px`;
    service_img.current.style.height = `${460 * y}px`;

    store_img.current.style.width = `${440 * x}px`;
    store_img.current.style.height = `${530 * y}px`;
  }


  // 온 클릭 def ==========================================
  const goChalenge = () => history.push("/main/challenge");
  const gomakeMission = () => history.push("/main/mission/create");
  const goparticipateMission = () => history.push("/main/mission");
  const gomyPage = () => history.push("/my_page");
  const gotutorial = () => history.push("/main/tutorial");
  const gologout = () => {
    dispatch(UserAction.logOut());
    history.push('/');
  }
  const goboard = () => history.push("/");
  const goservice = () => history.push("/");
  const gostore = () => history.push("/main/block_store");
  //=======================================================

 
  //main api 모음=====myblock 불러오기=======================
  
  //============================================================

  return (
    <div className={styles.body} ref={back_back} onClick={changeSize}>

      <Nav type="main" />

        <ScrollContainer
          className="scroll-container"
          className={styles.scrollcontainer}
          vertical={false}
        >

          <div 
            className={styles.background_img} 
            ref={main_ref}
            draggable="true"
          >
            <div 
              className={styles.chalenge_img} 
              ref={chalenge_img} 
              onClick={goChalenge} 
              onDragStart={e => e.preventDefault()}
            ></div>

            <div 
              className={styles.makeMission_img} 
              ref={makeMission_img}
              onClick={gomakeMission}
            ></div>

            <div 
              className={styles.participateMission_img} 
              ref={participateMission_img}
              onClick={goparticipateMission}
            ></div>

            <div 
              className={styles.myPage_img} 
              ref={myPage_img}
              onClick={gomyPage}
            ></div>

            <div 
              className={styles.tutorial_img} 
              ref={tutorial_img}
              onClick={gotutorial}
            ></div>

            <div 
              className={styles.logout_img} 
              ref={logout_img}
              onClick={gologout}
            ></div>

            <div 
              className={styles.board_img} 
              ref={board_img}
              onClick={goboard}
            ></div>

            <div 
              className={styles.service_img} 
              ref={service_img}
              onClick={goservice}
            ></div>

            <div 
              className={styles.store_img} 
              ref={store_img}
              onClick={gostore}
            ></div>
          </div>

        </ScrollContainer>

    </div>
  )
};

export default Main;