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
            <Icon.MdAssistantPhoto/>{ difficulty }
            <Icon.MdFace/>{ peopleCnt }
            <Icon.MdFavorite/>{ likeCnt } <p/>
        </div>
    </>
    );
};

export default ListCardForm;