import React, { useEffect, useState } from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import ModalDetailCardForm from '../modal_detail_card_form/modal_detail_card_form';
import styles from './list_form.module.css';

// type : mission, answer, project
const ListForm = ({ type, list, detail, getDetail, getList, setLike, setDislike, 
                    onModify, onDelete, onChangeSearchType, userInfo, onParticipateMission,
                    openDetail, setOpenDetail }) => {

    // 디테일 모달 열기
    const clickCard = (e) => {
        getDetail(e.target.id);
        setOpenDetail(true);
    }

    // 디테일 모달 닫기
    const closeModal = () => {
        setOpenDetail(false);
        getList();
    }

    return (
    <>  
        { type === 'mission' && 
            <>
            <select name="sortType" className={styles.select} onChange={onChangeSearchType}>
                <option value="decrease">높은 순</option>
                <option value="increase">낮은 순</option>
            </select>

            { openDetail && 
                <div className={styles.modal_wrapper}>
                    <ModalDetailCardForm
                        detail={detail}
                        setLike={setLike}
                        setDislike={setDislike}
                        closeModal={closeModal}
                        userInfo={userInfo}
                        onParticipateMission={onParticipateMission}
                        onModify={onModify}
                        onDelete={onDelete}
                    />
                </div> }
            </>
        }

        <div className={styles.listForm}>
        { list.map(card => (
            <ListCardForm
                type={type}
                key={card.id}
                id={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                difficulty={card.difficulty}
                readCnt={card.readCnt}
                likeCnt={card.likeCnt}
                peopleCnt={card.peopleCnt}
                clickCard={clickCard} />
        ))}
        </div>
    </>
    );
};

export default ListForm;