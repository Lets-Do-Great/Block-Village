import React from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import ModalDetailCardForm from '../modal_detail_card_form/modal_detail_card_form';
import styles from './list_form.module.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

// type : mission, answer
const ListForm = ({ type, list, detail, getDetail, getList, setLike, setDislike, 
                    onModify, onDelete, userInfo, onParticipateMission,
                    openDetail, setOpenDetail, selectedMission }) => {

    const history = useHistory();

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

    const goBack = () => {
        history.push('/main/mission');
    }

    return (
    <>  
        {type === "answer" && 
            <div className={styles.answer_list_title}>
                <div className={styles.back_btn} 
                    onClick={goBack}>
                    <IoMdArrowRoundBack size="18" />
                    뒤로가기
                </div>
                <div className={styles.text_title}>
                    <FaQuoteLeft className={styles.quote}/>
                    {selectedMission.title}
                    <FaQuoteRight className={styles.quote}/>
                    의 답안 목록
                </div>
            </div>
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