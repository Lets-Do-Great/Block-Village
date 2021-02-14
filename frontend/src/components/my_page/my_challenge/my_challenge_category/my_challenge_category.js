import React from 'react';
import styles from './my_challenge_category.module.css';
import * as Icon from 'react-icons/md';

const MyChallengeCategory = ({ closeModal, category, onChangeCategory }) => {
    return (
    <div className={styles.my_challenge_category}>
        <div 
            className={styles.close}
            onClick={closeModal}>
                <Icon.MdHighlightOff/></div>

        <div className={styles.tab_menus}>
            <ul className={styles.tabs}>
                <li
                    name="done"
                    value="done"
                    onClick={onChangeCategory}
                    className={category === 'done' ? styles.current : ''}>참여 완료 챌린지</li>
                <li 
                    name="todo"
                    value="todo"
                    onClick={onChangeCategory}
                    className={category === 'todo' ? styles.current : ''}>참여 중인 챌린지</li>
            </ul>
        </div>
    </div>);
}

export default MyChallengeCategory;