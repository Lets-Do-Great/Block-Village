import React from 'react';
import MyInfoForm from '../my_info_read/my_info_form';

const MyPageRead = ({ userInfo, setComponentType, deleteInfo }) => {

  const onClickModify = () => {
    setComponentType(false);
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