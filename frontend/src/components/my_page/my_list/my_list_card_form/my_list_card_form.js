import React from 'react';
import styles from './my_list_card_form.module.css';
import * as Icon from "react-icons/md";

const MyListCardForm = ({ id, title, difficulty, 
                        likeCnt, peopleCnt, clickCard }) => {
    return (<>
        <div id={id}
            onClick={clickCard}>{ title }</div>

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
    </>);
};

export default MyListCardForm;