import React from 'react';
import styles from './my_page_nav.module.css';
import { useHistory } from 'react-router-dom';

const MyPageNav = () => {
    const history = useHistory();

    const goToMain = () => {
        history.push('/main');
    }

    return (<>
    <header className={styles.navbar}>
        <img 
            onClick={goToMain}
            className={styles.logo_img} src="/images/logo1.png" />

    </header>
    </>);
    
}

export default MyPageNav;
