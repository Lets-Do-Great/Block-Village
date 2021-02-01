import React, { useState } from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import DetailCardForm from '../detail_card_form/detail_card_form';
import styles from './list_form.module.css';

const ListForm = ({ list, detail, getDetail, 
                    setLike, setDislike, onChangeSearch }) => {

    const [ modal, setModal ] = useState(false);

    const clickCard = (e) => {
        getDetail(e.target.id);
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

    return (
    <>
        <select className={styles.select} onChange={onChangeSearch}>
            <option name="sortType" value="decrease">높은 순</option>
            <option name="sortType" value="increase">낮은 순</option>
        </select>

        { modal && 
        <div className={styles.modal_wrapper}>
            <DetailCardForm
                detail={detail}
                setLike={setLike}
                setDislike={setDislike}
                closeModal={closeModal}
            />
        </div> }

        <div className={styles.listForm}>
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
        </div>
    </>
    );
};

export default ListForm;