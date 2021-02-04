import React, { useEffect, useState } from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import DetailCardForm from '../detail_card_form/detail_card_form';
import styles from './list_form.module.css';

const ListForm = ({ list, detail, getDetail, getList, setLike, setDislike, 
                    onDelete, onChangeSearchType, userInfo, onParticipateMission }) => {

    // 모달 상태 저장
    const [ modal, setModal ] = useState(false);

    // 디테일 모달 열기
    const clickCard = (e) => {
        getDetail(e.target.id);
        setModal(true);
    }

    // 디테일 모달 닫기
    const closeModal = () => {
        setModal(false);
        getList();
    }

    return (
    <>
        <select name="sortType" className={styles.select} onChange={onChangeSearchType}>
            <option value="decrease">높은 순</option>
            <option value="increase">낮은 순</option>
        </select>

        { modal && 
        <div className={styles.modal_wrapper}>
            <DetailCardForm
                detail={detail}
                setLike={setLike}
                setDislike={setDislike}
                closeModal={closeModal}
                userInfo={userInfo}
                onParticipateMission={onParticipateMission}
                onDelete={onDelete}
            />
        </div> }

        <div className={styles.listForm}>
        { list.map(card => (
            <ListCardForm
                key={card.id}
                id={card.id}
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