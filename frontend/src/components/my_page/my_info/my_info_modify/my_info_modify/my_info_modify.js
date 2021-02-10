import React, { useState } from 'react';
import MyInfoModifyForm from '../my_info_modify_form/my_info_modify_form';
import styles from './my_info_modify.module.css';

const MyInfoModify = ({ modifyInfo, modifyInput, onChangeModify, setType }) => {
  // 비밀번호 일치하는지 확인하는 데이터
  const [ PWConfirm, setPWConfirm ] = useState(true);

  const onClickCancle = () => {
    setType('read');
  }

  // 비밀번호 일치하면 정보 수정 제출하기
  const onSubmitModify = () => {
    if(PWConfirm){
      modifyInfo();
    }
  }

  return (
  <>
    <MyInfoModifyForm
      modifyInput={modifyInput}
      onChangeModify={onChangeModify}
      setPWConfirm={setPWConfirm}
    />
    <div className={styles.btn_my_info_form}>
      <button
        className={styles.btn_submit} 
        onClick={onSubmitModify}>정보 수정 완료</button>
      <button 
        className={styles.btn_cancle}
        onClick={onClickCancle}>취소하기</button>
    </div>
  </>
  );
};

export default MyInfoModify;