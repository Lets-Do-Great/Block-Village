import React from 'react';
import styles from './component_detail_card_form.module.css';
import * as Icon from 'react-icons/md';

const ComponentDetailCardForm = ({ detail, setLike, setDislike, 
                            userInfo, setOpenDetail, onDelete }) => {

    const {email, nickName, title, created_at, updated_at, favorite,
        content, difficulty, likeCnt, readCnt } = detail;

    const goBack = () => {
        setOpenDetail(false);
    }

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
            goBack();
        } catch(e) {
            console.log(e);
        }
    }

    return (<>
        <button onClick={goBack}>뒤로가기</button>

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
            <Icon.MdFace/>{ readCnt }
        </div>
        <div className={styles.icon}>
            <Icon.MdFavorite/>{ likeCnt }
        </div>

        <div className={styles.content}>{ content }</div>

        { userInfo === email && (<>
            <button>수정하기</button>
            <button onClick={onSubmitDelete}>삭제하기</button>
        </>)}
    </>);
}

export default ComponentDetailCardForm;