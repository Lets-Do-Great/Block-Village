import React from 'react';
import styles from './my_detail_card_form.module.css';
import * as Icon from "react-icons/md";

const MyDetailCardForm = ({ detail, onModify, onDelete, onCloseDetail }) => {

    const { nickName, title, created_at, updated_at,
        content, difficulty, likeCnt, peopleCnt } = detail;

    const onSubmitDelete = () => { 
        onCloseDetail();
        onDelete();
    }

    return (<div className={styles.detail_form}>
        <div 
            onClick={onCloseDetail} 
            className={styles.close}>뒤로가기</div>

        <div className={styles.title}>{ title }</div>

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
        <button>수정하기</button>
        <button onClick={onSubmitDelete}>삭제하기</button>
    </div>);
};

export default MyDetailCardForm;