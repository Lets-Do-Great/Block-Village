import React, { useState, useEffect } from 'react';
import styles from './my_info_modify_form.module.css'

const MyInfoModifyLeft = ({ modifyInput, onChangeModify, onDeleteProfileImage }) => {
  const { profileImage } = modifyInput;

  const imgUrl = URL.createObjectURL(profileImage)

  return (
    <div className={styles.my_info_left}>
      <img 
        className={styles.profile_img} 
        src={imgUrl}/>
      <input 
        className={styles.edit_file}
        type="file" 
        name="profileImage"
        onChange={onChangeModify} />
        <div
            className={styles.delete_file}
            onClick={onDeleteProfileImage}>
                프로필 이미지 삭제</div>
    </div>
    );
};

const MyInfoModifyRight = ({ modifyInput, onChangeModify, setPWConfirm }) => {
  const { nickname, introduction, prevPassword, newPassword } = modifyInput;
  const [PWConfirmInput, setPWConfirmInput] = useState({
    PW: '',
    check: true,
  });

  // 비밀번호를 입력할 때마다 비교하는 함수
  useEffect(() => {
    validatePWConfirm();
  }, [PWConfirmInput.PW, prevPassword, newPassword]);

  useEffect(() => {
    if (PWConfirmInput.check) {
      setPWConfirm(true);
    } else {
      setPWConfirm(false);
    }
  }, [PWConfirmInput.check]);

  // 비밀번호 확인 값이 바뀔 때마다 바꾸는 함수
  const onChange = (e) => {
    setPWConfirmInput({
      ...PWConfirmInput,
      PW: e.target.value,
    });
  };

  // 비밀번호 확인이 동일한지 확인하는 함수
  const validatePWConfirm = () => {
    if (
      newPassword.length + PWConfirmInput.PW.length + prevPassword.length ===
      0
    ) {
      setPWConfirmInput({
        ...PWConfirmInput,
        check: true,
      });
    } else if (newPassword.length === 0 || PWConfirmInput.PW.length === 0) {
      setPWConfirmInput({
        ...PWConfirmInput,
        check: false,
      });
    } else if (newPassword === PWConfirmInput.PW) {
      setPWConfirmInput({
        ...PWConfirmInput,
        check: true,
      });
    } else {
      setPWConfirmInput({
        ...PWConfirmInput,
        check: false,
      });
    }
  };

    return (
    <div className={styles.my_info_right}>
        <input 
            className={styles.input}
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChangeModify}
            placeholder="닉네임"/><br/>
        <input 
            className={styles.input}
            type="text"
            name="introduction"
            value={introduction}
            onChange={onChangeModify}
            placeholder="자기소개"/><br/>
        <input 
            className={styles.input}
            type="password"
            name="prevPassword"
            value={prevPassword}
            onChange={onChangeModify}
            placeholder="현재 비밀번호"/><br/>
        <input 
            className={styles.input}
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={onChangeModify}
            placeholder="새로운 비밀번호"/><br/>
        <input 
            className={styles.input}
            type="password"
            name="PWConfirmInput"
            value={PWConfirmInput.PW}
            onChange={onChange}
            placeholder="비밀번호 확인"/><br/>

        {
            newPassword === '' 
            ? ( <p></p> )
            : ( PWConfirmInput.check 
                ? <p>비밀번호가 일치합니다.</p>
                : <p>비밀번호가 일치하지 않습니다.</p>)
        }<br/>
    </div>
    );
};

const MyInfoModifyForm = ({ modifyInput, onChangeModify, 
                        onDeleteProfileImage, setPWConfirm }) => {
    return (
    <div className={styles.my_info_form}>
        <MyInfoModifyLeft
            modifyInput={modifyInput}
            onChangeModify={onChangeModify}
            onDeleteProfileImage={onDeleteProfileImage}/>
        <MyInfoModifyRight
            modifyInput={modifyInput}
            onChangeModify={onChangeModify}
            setPWConfirm={setPWConfirm}/>
    </div>
    );
};

export default MyInfoModifyForm;
