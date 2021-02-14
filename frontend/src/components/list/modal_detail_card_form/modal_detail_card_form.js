import React, { useState, useEffect } from 'react';
import styles from './modal_detail_card_form.module.css';
import * as Icon from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import MissionModify from '../../blockly/mission_modify/mission_modify';

const ModalDetailCardForm = ({ detail, setLike, setDislike, closeModal, 
                            userInfo, onParticipateMission, onDelete, onModify }) => {
                         
    const history = useHistory();
    const {email, id, nickname, title, created_at, updated_at, favorite,
        content, difficulty, likeCnt, peopleCnt, todo } = detail;

    const created = created_at.split("T");
    const updated = updated_at.split("T");

    const [ modifyModal, setModifyModal ] = useState(false);

    const changeLike = () => {
        if(favorite){
            setDislike();
        } else {
            setLike();
        }
    };

    const onSubmitModify = () => {
        setModifyModal(true);
    }

    const closeModifyModal = () => {
        setModifyModal(false);
    }

    const onSubmitDelete = () => {
        try{
            onDelete();
            closeModal();
        }catch(e) {
            console.log(e);
        }
    }

    const goToAnswerList= () => {
        history.push(`/main/answer/${id}`);
    }

    const goToAnswer = () => {
        history.push(`/main/mission/answer`);
    }

    return (
    <div className={styles.detail_form}>
        <div 
            onClick={closeModal} 
            className={styles.close}>
                <Icon.MdHighlightOff/></div>
        
        <div className={styles.header}>
            <div className={styles.title}>{ title }</div>
            <div 
                className={styles.heart}
                onClick={changeLike}>
                { favorite
                    ? <Icon.MdFavorite/>
                    : <Icon.MdFavoriteBorder/> }
            </div>
        </div>

        <div className={styles.icon_nickname}>
            <Icon.MdAccountCircle className={styles.icon}/>
            <div className={styles.icon_text}>{ nickname }</div>
        </div>
        <div className={styles.icon_date}>
            <Icon.MdEdit className={styles.icon}/>
            <div className={styles.icon_text}>{ created[0] } / { updated[0] }</div>
        </div>
        <div className={styles.icon_box}>
            <Icon.MdAssistantPhoto className={styles.icon}/>
            <div className={styles.icon_text}>{ difficulty }</div>
        </div>
        <div className={styles.icon_box}>
            <Icon.MdFace className={styles.icon}/>
            <div className={styles.icon_text}>{ peopleCnt }</div>
        </div>
        <div className={styles.icon_box}>
            <Icon.MdFavorite className={styles.icon}/>
            <div className={styles.icon_text}>{ likeCnt }</div>
        </div>

        

        <div className={styles.content}>{ content }</div>

        { userInfo === email
            ? (<>
                <button 
                    className={styles.participated_button}
                    onClick={onSubmitModify}>수정하기</button>
                <button
                    className={styles.participating_button} 
                    onClick={onSubmitDelete}>삭제하기</button>
                { modifyModal && 
                    <MissionModify
                        title={title}
                        content={content}
                        onModifyMission={onModify}
                        closeModal={closeModifyModal}/> }
            </>)
            : <>{ !todo && 
                <button 
                    onClick={onParticipateMission} 
                    className={styles.participate_button}>미션 참여하기</button> }
              { todo === 'todo' &&
                <button 
                    className={styles.participating_button} 
                    onClick={goToAnswer}>미션 참여중</button> }
              { todo === 'done' &&
                <button
                    onClick={goToAnswerList}
                    className={styles.participated_button}>참여 완료! 다른 답안 보러 가기</button> }</>
        }
    </div>
    );
};

export default ModalDetailCardForm;