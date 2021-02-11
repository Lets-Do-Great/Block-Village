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
                >여러분을 환영합니다. 블록마을 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 블록마을 서비스의 이용과 관련하여 블록마을 서비스를 제공하는 블록마을 주식회사(이하 ‘블록마을’)와 이를 이용하는 블록마을 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 블록마을 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.</div>

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
                >여러분을 환영합니다. 블록마을 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 블록마을 서비스의 이용과 관련하여 블록마을 서비스를 제공하는 블록마을 주식회사(이하 ‘블록마을’)와 이를 이용하는 블록마을 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 블록마을 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.</div>

        </div>
        <button 
            className={styles.button_agree}
            onClick={onClick}> 동의하기 </button>
    </>
    );
}

export default AgreeForm;