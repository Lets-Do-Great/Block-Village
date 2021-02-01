import React, { useEffect } from 'react';
import styles from './detail_card_form.module.css';
import * as Icon from 'react-icons/md';

const DetailCardForm = ({ detail, setLike, setDislike }) => {
    const {nickName, title, created_at, updated_at, favorite,
        content, difficulty, likeCnt, peopleCnt } = detail;

    const changeLike = () => {
        if(favorite){
            setDislike();
        } else {
            setLike();
        }
    };

    return (
    <div className={styles.detail_form}>
        <div className={styles.title}>{ title }</div>
        <div 
            className={styles.heart}
            onClick={changeLike}>
            { favorite
                ? <Icon.MdFavorite/>
                : <Icon.MdFavoriteBorder/> }
        </div>

        <div>
            <Icon.MdAccountCircle/>{ nickName }
        </div>
        <div>
            <Icon.MdEdit/>{ created_at } / { updated_at }
        </div>
        <div className={styles.icon}>
            <Icon.MdAssistantPhoto/>{ difficulty }
        </div>
        <div className={styles.icon}>
            <Icon.MdFace/>{ peopleCnt }
        </div>
        <div className={styles.icon}>
            <Icon.MdFavorite/>{ likeCnt }
        </div>

        <div>{ content }</div>
        <button className={styles.button}>미션 시작하기</button>
    </div>
    );
};

export default DetailCardForm;