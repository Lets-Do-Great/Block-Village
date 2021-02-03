import React, { useEffect, useRef, useState } from 'react';

import styles from './main.module.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import MainMenu from '../main_menu/main_menu';
import Draggable from 'react-draggable';

const Main = (props) => {
  const history = useHistory();
  const main_image = useRef();

  useEffect(() => {

    const ele = main_image.current;

    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function(e) {

      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';
      pos = {
        left: ele.scrollLeft,
        top: ele.scrollTop,
        x: e.clientX,
        y: e.clientY,
      };
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function() {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', mouseUpHandler);
    };

    ele.addEventListener('mousedown', mouseDownHandler);

  })


  const card_infos = [
    {
      id: 1,
      title: '튜토리얼',
      // img_url: 'https://cdn.pixabay.com/photo/2015/05/12/09/13/freelancer-763730__340.jpg',
      img_url: "/images/maze.png",
      url: '/main/tutorial_main',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
    {
      id: 2,
      title: '미션 깨기',
      img_url: 'https://cdn.pixabay.com/photo/2015/07/15/11/53/woodtype-846088__340.jpg',
      url: '/main/mission_main',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
    {
      id: 3,
      title: '챌린지',
      img_url: 'https://media.istockphoto.com/photos/developing-programmer-team-development-website-design-and-coding-in-picture-id1169929038?b=1&k=6&m=1169929038&s=170667a&w=0&h=-OrMC_sVCGZDJCA7OLXG2Xa5UjWibGr2rnL7z6xVIfI=',
      url: '/main/challenge_main',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
    {
      id: 4,
      title: '블록 상점',
      img_url: 'https://cdn.pixabay.com/photo/2016/11/29/11/14/business-1869127__340.jpg',
      url: '/main/block_store',
      content: '여러분들만의 블록으로 다양한 미션에 도전해 보세요!!',
    },
  ];

  const goMission = () => {
    history.push('/main/mission_main')
  }
  const goStore = () => {
    history.push('/main/block_store')
  }
  const goChallenge = () => {
    history.push('/main/challenge_main')
  }

  return (
    <div className={styles.body}>
      <Navbar />
      <div ref={main_image}>
        <img 
          src="/images/main_background_image.png" 
          className={styles.background_img} 
          >
        </img>
      </div>

      <div className={styles.container} >

        {/* <div className={styles.goMission} onClick={goMission}></div>
        <div className={styles.goStore} onClick={goStore}></div>
        <div className={styles.goChallenge} onClick={goChallenge}></div> */}


        {/* <div className={styles.left_btn}>
          <FaChevronLeft size="50" />
        </div> */}

        {/* {card_infos.map((info) => (
          <MainMenu info={info} key={info.id} />
        ))} */}

        {/* <div className={styles.right_btn}>
          <FaChevronRight size="50" />
        </div> */}

      </div>
    </div>
  )
};

export default Main;