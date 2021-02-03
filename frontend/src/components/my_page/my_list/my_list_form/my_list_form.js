import React, { useEffect } from 'react';
import MyListCardForm from '../my_list_card_form/my_list_card_form';

const MyListForm = ({ list, getList, getDetail, onOpenDetail }) => {

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
                key={card.missionId}
                id={card.missionId}
                title={card.title}
                difficulty={card.difficulty}
                likeCnt={card.likeCnt}
                peopleCnt={card.peopleCnt}
                clickCard={clickCard}
            />
        ))}
    </>);
};

export default MyListForm;