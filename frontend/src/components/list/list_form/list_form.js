import React from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import ModalDetailCardForm from '../modal_detail_card_form/modal_detail_card_form';
import styles from './list_form.module.css';

// type : mission, answer
const ListForm = ({ type, list, detail, getDetail, getList, setLike, setDislike, 
                    onModify, onDelete, userInfo, onParticipateMission,
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
                    commentCnt={card.commentCnt}
                    likeCnt={card.likeCnt}
                    peopleCnt={card.peopleCnt}
                    clickCard={clickCard} />
            ))}
        </div>

        { type === 'mission' && openDetail && 
            <div className={styles.modal_wrapper}>
                <div className={styles.modal}>
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
                </div>
            </div> 
        }
    </>
    );
};

export default ListForm;