import React from 'react';
import styles from './sns_log_in_form.module.css';

const SnsLogInForm = () => {
    return (
    <>
        <div className={styles.sns_log_in_form}>
            <div className={styles.comment_sns_log_in}>SNS로 로그인 하기</div>
        </div>
    </>
    );
}

export default SnsLogInForm;