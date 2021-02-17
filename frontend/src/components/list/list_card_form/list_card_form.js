import React, { useEffect, useRef } from 'react';
import * as Icon from 'react-icons/md';
import styles from './list_card_form.module.css';

const ListCardForm = ({ type, id, imageUrl, title, 
                    difficulty, commentCnt, readCnt, 
                    likeCnt, peopleCnt, clickCard }) => {

    const card_bg = useRef();
    const title_color = useRef();

    const onDivClick = (event) => {
        event.preventDefault();
        title_color.current.click();
    }

    useEffect(() => {
        if(type === 'mission'){
            card_bg.current.className = styles.img_mission;
            title_color.current.className = styles.title_mission;
        } else {
            card_bg.current.className = styles.img_answer;
            title_color.current.className = styles.title_answer;
        }
    }, []);

    return (
    <>
        <div 
            className={styles.card_form} 
            id={id}
            onClick={onDivClick}
        >
            <img ref={card_bg} src={imageUrl}/>
            <p ref={title_color} id={id} onClick={clickCard}>
                    { title }</p>
            <div className={styles.icon_box}>
                { type === 'mission' && 
                <>
                    <div className={styles.icon}>
                        <Icon.MdAssistantPhoto/> { difficulty }
                    </div>
                    <div className={styles.icon}>
                        <Icon.MdFace/> { peopleCnt }
                    </div>
                </>
                }
                { type !== 'mission' && 
                <>
                    <div className={styles.icon}>
                        <Icon.MdChatBubbleOutline/> { commentCnt }
                    </div>
                    <div className={styles.icon}>
                        <Icon.MdFace/> { readCnt }
                    </div>
                </>
                }
                <div className={styles.icon}>
                    <Icon.MdFavorite/> { likeCnt }
                </div>
            </div>
        </div>
    </>
    );
};

export default ListCardForm;