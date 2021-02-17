import React from 'react';
import ListCardForm from '../list_card_form/list_card_form';
import ModalDetailCardForm from '../modal_detail_card_form/modal_detail_card_form';
import styles from './list_form.module.css';
import Modal from 'react-modal';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

Modal.setAppElement('#root')
// type : mission, answer
const ListForm = ({ type, list, detail, getDetail, getList, setLike, setDislike, 
                    onModify, onDelete, userInfo, onParticipateMission,
                    openDetail, selectedMission }) => {

    const history = useHistory();
    

    const customStyles = {
        content : {
            width                 : '100%',
            height                : '100%',
            background            : 'rgba(0,0,0,0.6)',
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
      };

    // 디테일 모달 열기
    const clickCard = (e) => {
        console.log(getDetail);
        getDetail(e.target.id);
    }

    // 디테일 모달 닫기
    const closeModal = () => {
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
            <Modal
                isOpen={openDetail}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
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
            </Modal>
        }
    </>
    );
};

export default ListForm;