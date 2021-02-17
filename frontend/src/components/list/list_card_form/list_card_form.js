import React, { useEffect, useRef } from 'react';
import * as Icon from 'react-icons/md';
import styles from './list_card_form.module.css';

const ListCardForm = ({ type, id, imageUrl, title, difficulty, 
    commentCnt, readCnt, likeCnt, peopleCnt, clickCard }) => {

    const card_bg = useRef();
    const title_color = useRef();

    useEffect(() => {
        if(type === 'mission'){
            card_bg.current.className = styles.img_mission;
            title_color.current.className = styles.title_mission;
        } else if(type === 'answer'){
            card_bg.current.className = styles.img_answer;
            title_color.current.className = styles.title_answer;
        }
    }, []);

    return (
    <>
        <div className={styles.card_form} 
            onClick={clickCard}>
            <img ref={card_bg} src={imageUrl}/>
            <p ref={title_color}
                id={id} >
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
                { type === 'answer' && 
                <>
                    <div className={styles.icon}>
                        <Icon.MdChatBubbleOutline/> { commentCnt }
                    </div>
                    <div className={styles.icon}>
                        <Icon.MdFace/> { readCnt }
                    </div>
                </>
                }
                { type === 'project' && 
                    <div className={styles.icon}>
                        <Icon.MdFace/> { readCnt }
                    </div>
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