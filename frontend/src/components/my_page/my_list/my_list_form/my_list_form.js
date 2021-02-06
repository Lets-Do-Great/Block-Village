import React, { useEffect } from 'react';
import MyListCardForm from '../my_list_card_form/my_list_card_form';

const MyListForm = ({ type, list, getList, getDetail, onOpenDetail }) => {

    useEffect(() => {
        getList();
    }, []);

    const clickCard = (e) => {
        getDetail(e.target.id);
        onOpenDetail();
    }
    
    return (<>
        { list.map(card => (
            <MyListCardForm 
                key={card.id}
                id={card.id}
                type={type}
                title={card.title}
                difficulty={card.difficulty}
                commentCnt={card.commentCnt}
                likeCnt={card.likeCnt}
                peopleCnt={card.peopleCnt}
                readCnt={card.readCnt}
                clickCard={clickCard}
            />
        ))}
    </>);
};

export default MyListForm;