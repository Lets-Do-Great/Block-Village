import React from 'react';
import styles from './nav.module.css';
import { useHistory } from 'react-router-dom';

const Nav = ({ type }) => {
    const history = useHistory();

    const goToMain = () => {
        history.push('/main');
    }


    return (<>
    <header className={styles.navbar}>
        <img 
            onClick={goToMain}
            className={styles.logo_img} src="/images/logo1.png" />
        <div className={styles.title}>
        { type === "challenge" && "챌린지에 도전해보아요" }
        { type === "my_page" && "마이페이지" }
        { type === "mission" && "미션을 정복해보아요" }

        </div>
    </header>
    </>);
}

export default Nav;