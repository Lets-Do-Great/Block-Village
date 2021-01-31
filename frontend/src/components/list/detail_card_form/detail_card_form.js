import React, { useEffect } from 'react';
import * as Icon from 'react-icons/md';

const DetailCardForm = ({ detail, setLike, setDislike }) => {
    const {writer:email, title, created_at, updated_at, like,
        content, code, imageUrl, difficulty, likeCnt, peopleCnt } = detail;

    const changeLike = () => {
        if(like){
            setDislike();
        } else {
            setLike();
        }
    };

    return (
    <>
        <p>{ title }</p>
        <Icon.MdAccountCircle/>{ email }
        <Icon.MdEdit/>{ created_at } / { updated_at }
        <Icon.MdAssistantPhoto/>{ difficulty }
        <Icon.MdFace/>{ peopleCnt }
        <Icon.MdFavorite/>{ likeCnt }

        { like
         ? <button onClick={changeLike}><Icon.MdFavorite/></button>
         : <button onClick={changeLike}><Icon.MdFavoriteBorder/></button>
        }

        <p>{ code }</p>
        <p>{ imageUrl }</p>
        <p>{ content }</p>
        <button>미션 시작하기</button>
    </>
    );
};

export default DetailCardForm;