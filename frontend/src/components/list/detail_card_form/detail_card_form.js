import React from 'react';
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
        <Icon.MdAccountCircle/><p>{ email }</p>
        <Icon.MdEdit/><p>{ created_at } / { updated_at }</p>
        <Icon.MdAssistantPhoto/><p>{ difficulty }</p>
        <Icon.MdFace/><p>{ peopleCnt }</p>
        <Icon.MdFavorite/><p>{ likeCnt }</p>

        { like
         ? <button onClick={changeLike}><Icon.MdFavorite/></button>
         : <button onClick={changeLike}><Icon.MdFavoriteBorder/></button>
        }

        <p>{ code }</p>
        <p>{ imageUrl }</p>
        <p>{ content }</p>
        <buttom>미션 시작하기</buttom>
    </>
    );
};

export default DetailCardForm;