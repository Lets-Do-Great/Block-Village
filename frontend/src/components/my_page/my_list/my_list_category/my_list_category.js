import React, {useEffect} from 'react';
import styles from './my_list_category.module.css';
import * as Icon from 'react-icons/md';

const MyListCategory = ({ category, onChangeCategory, closeModal }) => {    
    return (
    <div className={styles.my_list_category}>
        <div 
            className={styles.close}
            onClick={closeModal}><Icon.MdHighlightOff/></div>
        <div className={styles.tab_menus}>
            <ul className={styles.tabs}>
                <li 
                    name="myMission"
                    value="myMission"
                    onClick={onChangeCategory}
                    className={category === 'myMission' ? styles.current : ''}>내가 만든 미션</li>
                <li
                    name="makingAnswer"
                    value="makingAnswer"
                    onClick={onChangeCategory}
                    className={category === 'makingAnswer' ? styles.current : ''}>참여중인 미션</li>
                <li 
                    name="myAnswer"
                    value="myAnswer"
                    onClick={onChangeCategory}
                    className={category === 'myAnswer' ? styles.current : ''}>내가 만든 답안</li>
            </ul>
        </div>
    </div>);
}

export default MyListCategory;