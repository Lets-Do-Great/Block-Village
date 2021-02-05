import React, { useEffect, useState } from 'react';
import styles from './agree_form.module.css';

const AgreeForm = ({ onChangeAgree }) => {
    const [ agree, setAgree ] = useState({ 
        both: false, 
        first: false, 
        second: false,
    })

    const clickBoth = (e) => {
        if(e.target.checked){
            setAgree({
                both: true,
                first: true,
                second: true,
            })
        } else{
            setAgree({
                both: false,
                first: false,
                second: false,
            })
        }
    }

    const clickOne = (e) => {
        const {name} = e.target;

        setAgree({
            ...agree,
            [name]: e.target.checked,
        })
    }

    useEffect(() => {
        if(agree.first && agree.second){
            setAgree({
                ...agree,
                both: true,
            });
        }else{
            setAgree({
                ...agree,
                both: false,
            });
        }
    }, [agree.first, agree.second]);

    const onClick = () => {
        if(agree.both){
            onChangeAgree();
        } else{
            alert("이용 약관에 동의 하세요.");
        }
    };

    return (
    <>  
        <div
            className={styles.title}>이 용 약 관</div>
        <div className={styles.agree_form}>
            <div className={styles.comment_agree}>
                이용약관, 개인정보 수집 및 이용에 모두 동의합니다.</div>
            <input 
                className={styles.check_both}
                type="checkbox"
                onChange={clickBoth}
                name="both"
                checked={agree.both}/>
            <hr/>

            <div className={styles.comment_agree}>
                이용약관 동의 (필수)</div> 
            <input 
                className={styles.check_both}
                type="checkbox" 
                onChange={clickOne}
                name="first"
                checked={agree.first}/>
            <div
                className={styles.agree_content}
                >[ 첫번째 이용약관 내용 ]</div>

            <div className={styles.comment_agree}>
                개인 정보 수집 및 이용에 대한 안내 (필수)</div> 
            <input 
                className={styles.check_both}
                type="checkbox" 
                onChange={clickOne}
                name="second"
                checked={agree.second}/>
            <div
                className={styles.agree_content}
                >[ 두번째 이용약관 내용 ]</div>

        </div>
        <button 
            className={styles.button_agree}
            onClick={onClick}> 동의하기 </button>
    </>
    );
}

export default AgreeForm;