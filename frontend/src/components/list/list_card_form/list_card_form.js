import React from 'react';
import * as Icon from 'react-icons/md';
import styles from './list_card_form.module.css';

const ListCardForm = ({ type, id, imageUrl, title, difficulty, 
    commentCnt, readCnt, likeCnt, peopleCnt, clickCard }) => {
    return (
    <>
        <div className={styles.card_form}>
            <p className={styles.title}
                id={id} 
                onClick={clickCard}>
                    { title }</p>
            <img className={styles.img} src={imageUrl}/>
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