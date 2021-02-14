import React from 'react';
import styles from './my_challenge_list.module.css'

const MyChallengeList = ({ challenge }) => {
    const { title, image } = challenge;
    return (
    <div className={styles.list}>
        <div className={styles.title}>{ title }</div>
        <img
            className={styles.image} 
            src={image} />
    </div>);   
}

export default MyChallengeList;