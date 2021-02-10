import React, { useState, useEffect } from 'react';

const MyInfoModifyLeft = ({ modifyInput, onSubmitImage }) => {
  const { profileImage } = modifyInput;
  const [url, setUrl] = useState(null);

  const formData = new FormData();
  const onChangeProfileImage = (e) => {
    console.log(e);
    setUrl(e.target.value);
  };
  const onSubmit = () => {
    onSubmitImage(formData);
  };
  return (
    <>
      <img src={profileImage} alt="프로필 이미지" />
      {profileImage}
      <input type="file" multiple onChange={onChangeProfileImage} />
      <button onClick={onSubmit}> 프로필 이미지 편집 </button>
    </>
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
    <>
      <input
        type="text"
        name="nickname"
        value={nickname}
        onChange={onChangeModify}
        placeholder="닉네임"
      />
      <br />
      <input
        type="text"
        name="introduction"
        value={introduction}
        onChange={onChangeModify}
        placeholder="자기소개"
      />
      <br />
      <input
        type="password"
        name="prevPassword"
        value={prevPassword}
        onChange={onChangeModify}
        placeholder="현재 비밀번호"
      />
      <br />
      <input
        type="password"
        name="newPassword"
        value={newPassword}
        onChange={onChangeModify}
        placeholder="새로운 비밀번호"
      />
      <br />
      <input
        type="password"
        name="PWConfirmInput"
        value={PWConfirmInput.PW}
        onChange={onChange}
        placeholder="비밀번호 확인"
      />
      <br />

      {newPassword === '' ? (
        <p></p>
      ) : PWConfirmInput.check ? (
        <p>비밀번호가 일치합니다.</p>
      ) : (
        <p>비밀번호가 일치하지 않습니다.</p>
      )}
      <br />
    </>
  );
};

const MyInfoModifyForm = ({
  modifyInput,
  onChangeModify,
  setPWConfirm,
  onSubmitImage,
}) => {
  return (
    <>
      <MyInfoModifyLeft
        modifyInput={modifyInput}
        onChangeModify={onChangeModify}
        onSubmitImage={onSubmitImage}
      />
      <MyInfoModifyRight
        modifyInput={modifyInput}
        onChangeModify={onChangeModify}
        setPWConfirm={setPWConfirm}
      />
    </>
  );
};

export default MyInfoModifyForm;
