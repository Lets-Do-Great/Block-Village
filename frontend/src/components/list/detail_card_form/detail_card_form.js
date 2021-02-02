import React, { useEffect } from 'react';
import styles from './detail_card_form.module.css';
import * as Icon from 'react-icons/md';

const DetailCardForm = ({ detail, setLike, setDislike, closeModal, 
                            userInfo, onParticipateMission, onDelete }) => {

    const {email, nickName, title, created_at, updated_at, favorite,
        content, difficulty, likeCnt, peopleCnt, todo } = detail;

    const changeLike = () => {
        if(favorite){
            setDislike();
        } else {
            setLike();
        }
    };

    const onSubmitDelete = () => {
        try{
            onDelete();
            closeModal();
        }catch(e) {
            console.log(e);
        }
    }

    return (
    <div className={styles.detail_form}>
        <div 
            onClick={closeModal} 
            className={styles.close}>
                <Icon.MdHighlightOff/></div>

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
        { userInfo === email
            ? (<>
                <button>수정하기</button>
                <button onClick={onSubmitDelete}>삭제하기</button>
            </>)
            : <>{ !todo && 
                <button onClick={onParticipateMission} 
                    className={styles.participate_button}>미션 참여하기</button> }
              { todo === 'todo' &&
                <button 
                    className={styles.participating_button}>미션 참여중</button> }
              { todo === 'done' &&
                <button
                    className={styles.participated_button}>참여 완료</button> }</>
        }
    </div>
    );
};

export default DetailCardForm;