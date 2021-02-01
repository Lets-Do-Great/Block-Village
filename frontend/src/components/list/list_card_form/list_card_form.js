import React from 'react';
import * as Icon from 'react-icons/md';
import styles from './list_card_form.module.css';

const ListCardForm = ({ missionId, title, difficulty, likeCnt, peopleCnt, clickCard }) => {
    return (
    <>
        <div className={styles.card_form}>
            <p className={styles.title}
                id={missionId} 
                onClick={clickCard}>
                    { title }</p>
            <div className={styles.img}></div>
            <div className={styles.icon_box}>
                <div className={styles.icon}>
                    <Icon.MdAssistantPhoto/> { difficulty }
                </div>
                <div className={styles.icon}>
                    <Icon.MdFace/> { peopleCnt }
                </div>
                <div className={styles.icon}>
                    <Icon.MdFavorite/> { likeCnt } <p/>
                </div>
            </div>
        </div>
    </>
    );
};

export default ListCardForm;