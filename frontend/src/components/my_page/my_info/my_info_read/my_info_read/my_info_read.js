import React from 'react';
import MyInfoForm from '../my_info_form/my_info_form';
import styles from './my_info_read.module.css';
import * as Icon from 'react-icons/md';

const MyPageRead = ({ userInfo, setType, deleteInfo, closeModal }) => {

  const onClickModify = () => {
    setType('modify');
  }

  return (
  <div className={styles.my_info_read}>
    <div 
      className={styles.close}
      onClick={closeModal}><Icon.MdHighlightOff/></div>
    <MyInfoForm
      userInfo={userInfo}/>
    <div className={styles.btn_my_info_form}>
      <button 
        className={styles.btn_modify}
        onClick={onClickModify}>정보 수정</button>
      <button 
        className={styles.btn_delete}
        onClick={deleteInfo}>탈퇴하기</button>
    </div>
  </div>
  );
};

export default MyPageRead;