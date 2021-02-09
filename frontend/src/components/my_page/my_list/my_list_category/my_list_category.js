import React from 'react';
import styles from './my_list_category.module.css';

const MyListCategory = ({ onChangeCategory }) => {
    return (
    <div className={styles.tab_menus}>
        <ul className={styles.tabs}>
            <li 
                value="myMission"
                onClick={onChangeCategory}
                className={styles.current}>내가 만든 미션</li>
            <li
                value="makingAnswer"
                onClick={onChangeCategory}>참여중인 미션</li>
            <li 
                value="myAnswer"
                onClick={onChangeCategory}>내가 만든 답안</li>
        </ul>
    </div>);
}

export default MyListCategory;