import React, { useState } from 'react';
import MyPageContainer from '../../../containers/my_page_container';
import MyBlockContainer from '../../../containers/my_block_container';
import styles from './my_page_main.module.css';
import MyMissionContainer from '../../../containers/my_mission_container';
import MyProjectContainer from '../../../containers/my_project_container';
import Nav from '../../nav/nav';

const MyPageMain = () => {
    const [ openType, setOpenType ] = useState('');
    const [ modal, setModal ] = useState(false);

    // 모달 열기
    const openCard = (e) => {
        setOpenType(e.target.value);
        setModal(true);
    }

    // 모달 닫기
    const closeModal = () => {
        setOpenType('');
        setModal(false);
    }

    return (
        <div className={styles.my_page_main_img}>
            <Nav type="my_page" />
            <div>
                <button onClick={openCard} value="info">내 정보 조회</button> 
                <button onClick={openCard} value="block">내 블록 목록 조회</button> 
                <button onClick={openCard} value="mission">내 미션 목록</button> 
                <button onClick={openCard} value="project">내 작품 목록</button>
            </div>
            
            {  modal && openType === 'info' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyPageContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }

            {  modal && openType === 'block' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyBlockContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }

            {  modal && openType === 'mission' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyMissionContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }

            {  modal && openType === 'project' &&
                <div className={styles.modal_wrapper}>
                    <div className={styles.modal}>
                        <MyProjectContainer
                            closeModal={closeModal}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyPageMain;