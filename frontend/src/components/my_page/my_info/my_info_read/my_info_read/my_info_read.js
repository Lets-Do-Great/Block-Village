import React from 'react';
import MyInfoForm from '../my_info_form/my_info_form';

const MyPageRead = ({ userInfo, setType, deleteInfo }) => {

  const onClickModify = () => {
    setType('modify');
  }

  return (
  <>
    <button>닫기</button>
    <MyInfoForm
      userInfo={userInfo}
    />
    <button onClick={onClickModify}>정보 수정</button>
    <button onClick={deleteInfo}>탈퇴하기</button>
  </>
  );
};

export default MyPageRead;