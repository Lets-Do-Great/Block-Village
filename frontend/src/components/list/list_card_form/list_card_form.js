import React from 'react';
import * as Icon from 'react-icons/md';

const ListCardForm = ({ id, title, difficulty, likeCnt, peopleCnt, clickCard }) => {
    return (
    <>
        <button id={id} onClick={clickCard}>{ title }</button> <p/>
        <Icon.MdAssistantPhoto/>{ difficulty }
        <Icon.MdFace/>{ peopleCnt }
        <Icon.MdFavorite/>{ likeCnt } <p/>
    </>
    );
};

export default ListCardForm;