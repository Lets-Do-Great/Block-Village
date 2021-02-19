import React, { useEffect, useRef } from 'react';
import styles from './nav.module.css';
import { useHistory } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Nav = ({ type }) => {
    const history = useHistory();

    const goToMain = () => {
        history.push('/main');
    };

    const goToBoard = () => {
        history.push('/main/board');
    };

    const goToService = () => {
        history.push('/main/service_introduction');
    };
    
    const goToTutorial = () => {
        history.push('/main/tutorial');
    };

    const goToMakingMission = () => {
        history.push('/main/mission/create');
    };
    
    const goToMissionList = () => {
        history.push('/main/mission');
    };
    
    const goToChallenge = () => {
        history.push('/main/challenge');
    };
    
    const goToBlockStore = () => {
        history.push('/main/block_store');
    };
    
    const goMyPage = () => {
        history.push('/my_page');
    };

    const nav_header = useRef();

    useEffect(() => {
        if(type === 'main'){
            nav_header.current.className = styles.navbar_main;
        } else if(type === 'challenge'){
            nav_header.current.className = styles.navbar_challenge;
        } else if(type === 'my_page'){
            nav_header.current.className = styles.nav_bar_my_page;
        } else if(type === 'mission'){
            nav_header.current.className = styles.navbar_mission;
        } else if(type === 'board') {
            nav_header.current.className = styles.navbar_board;
        } else if(type === 'answer'){
            nav_header.current.className = styles.navbar_answer;
        } else if(type === 'store'){
            nav_header.current.className = styles.navbar_store;
        } else if(type === 'service'){
            nav_header.current.className = styles.navbar_service;
        }
    }, []);

    return (<>
    <header ref={nav_header} className={styles.navbar}>
        <img 
            onClick={goToMain}
            className={styles.logo_img} src="/images/logo1.png" />

        <div className={styles.title}>
            <div 
                onClick={goToBoard}
                className={styles.nav_text}>공지사항</div>
            <div 
                onClick={goToService}
                className={styles.nav_text}>서비스 소개</div>
            <div 
                onClick={goToTutorial}
                className={styles.nav_text}>튜토리얼</div>
            <div 
                onClick={goToBlockStore}
                className={styles.nav_text}>블록상점</div>
            <div 
                onClick={goToChallenge}
                className={styles.nav_text}>챌린지</div>
            <div 
                onClick={goToMakingMission}
                className={styles.nav_text}>미션 제작</div>
            <div 
                onClick={goToMissionList}
                className={styles.nav_text}>미션 목록</div>
        </div>

        <div className={styles.user_icon} onClick={goMyPage}>
            { type === "my_page" || <FaUserCircle color="#FFF"/> }
        </div>
    </header>
    </>);
}

export default Nav;