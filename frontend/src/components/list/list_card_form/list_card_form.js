import React from 'react';
import * as Icon from 'react-icons/md';

const ListCardForm = ({ title, difficulty, likeCnt, peopleCnt}) => {
    return (
    <>
        <p>{ title }</p>
        <Icon.MdAssistantPhoto/><p>{ difficulty }</p>
        <Icon.MdFace/><p>{ peopleCnt }</p>
        <Icon.MdFavorite/><p>{ likeCnt }</p>
    </>
    );
};

export default ListCardForm;