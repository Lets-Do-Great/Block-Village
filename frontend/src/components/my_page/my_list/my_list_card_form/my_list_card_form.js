import React from 'react';
import styles from './my_list_card_form.module.css';
import * as Icon from "react-icons/md";

const MyListCardForm = ({ type, id, title, difficulty, commentCnt,
                        likeCnt, peopleCnt, clickCard, readCnt }) => {
    return (<>
        <div id={id}
            onClick={clickCard}>{ title }</div>

        <div className={styles.icon_box}>
            <div className={styles.icon}>
                { type !== 'myAnswer' && <>
                    <Icon.MdAssistantPhoto/> { difficulty }
                </>}
                { type === 'myAnswer' && <>
                    <Icon.MdAssistantPhoto/> { commentCnt }
                </>}
            </div>
            <div className={styles.icon}>
                { type !== 'myAnswer' && <>
                    <Icon.MdFace/> { peopleCnt }
                </>}
                { type === 'myAnswer' && <>
                    <Icon.MdFace/> { readCnt }
                </>}
            </div>
            <div className={styles.icon}>
                <Icon.MdFavorite/> { likeCnt } <p/>
            </div>
        </div>
    </>);
};

export default MyListCardForm;