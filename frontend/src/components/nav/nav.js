import React, { useEffect, useRef } from 'react';
import styles from './nav.module.css';
import { useHistory } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

const Nav = ({ type }) => {
    const history = useHistory();

    const goToMain = () => {
        history.push('/main');
    }
    
    const goMyPage = () => {
        history.push('/my_page')
    }

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
        }
    }, []);

    return (<>
    <header ref={nav_header} className={styles.navbar}>
        <img 
            onClick={goToMain}
            className={styles.logo_img} src="/images/logo1.png" />

        <div className={styles.title}>
            { type === "challenge" && "챌린지에 도전해봐요" }
            {/* { type === "my_page" && "마이페이지" } */}
            { type === "mission" && "미션을 정복해봐요" }
            { type === "board" && "일단 여기는 게시판" }
        </div>

        <div className={styles.user_icon} onClick={goMyPage}>
            { type === "my_page" || <FaUserCircle color="#FFF"/> }
        </div>
    </header>
    </>);
}

export default Nav;