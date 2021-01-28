import React from 'react';
import FindPWForm from '../find_pw_form/find_pw_form';
import styles from './find_pw.module.css';
import { MdArrowBack } from 'react-icons/md';

const FindPW = ({ onChangeFindFW, findPW, findPWInput, setType }) => {
    const back = () =>{ setType('logIn') };

    return (
    <>        
        <div className={styles.back}>
            <MdArrowBack 
                className={styles.back_icon}
                onClick={back}/>
            <button
                className={styles.button_back} 
                onClick={back}>돌아가기</button><br/>
        </div>
        <div className={styles.find_PW_form}>
            <FindPWForm
                onChangeFindFW={onChangeFindFW}
                findPW={findPW}
                findPWInput={findPWInput}
            />
        </div>
    </>
    );
}

export default FindPW;