import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import styles from '../../mission_do/mission_do_modal/mission_do_modal_success/mission_do_modal_success.module.css';

const ChallengeDoModalSuccess = ({ onGoToChallengeList }) => {
    return (<>
        <div className={styles.modal_background} />
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.icon_challenge}>
                    <BsCheckCircle size="70" color="#27ae60"/>
                </div>
                <div className={styles.text_challenge}>정답입니다!!</div>
                <button 
                    className={styles.btn_challenge} 
                    onClick={onGoToChallengeList}>
                        챌린지 정답 제출하고 챌린지 목록가기</button>
            </div>
        </div>
    </>);
}

export default ChallengeDoModalSuccess;