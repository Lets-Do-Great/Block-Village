import React, { useEffect } from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import DetailCardForm from '../detail_card_form/detail_card_form';
import styles from './list_form.module.css';

const ListForm = ({ list, detail, getDetail, 
                    setLike, setDislike, onChangeSearch }) => {

    const clickCard = (e) => {
        console.log(list);
        console.log(e);
        getDetail(e.target.id);
    }

    return (
    <>
        <select className={styles.select} onChange={onChangeSearch}>
            <option name="sortType" value="decrease">높은 순</option>
            <option name="sortType" value="increase">낮은 순</option>
        </select>

        <DetailCardForm
            detail={detail}
            setLike={setLike}
            setDislike={setDislike}
        />
        
        { list.map(card => (
            <ListCardForm
                key={card.missionId}
                id={card.missionId}
                title={card.title}
                difficulty={card.difficulty}
                likeCnt={card.likeCnt}
                peopleCnt={card.peopleCnt}
                clickCard={clickCard}
            />
        ))}
    </>
    );
};

export default ListForm;