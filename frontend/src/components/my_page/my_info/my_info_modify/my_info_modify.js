import React, { useState } from 'react';
import MyInfoModifyForm from './my_info_modify_form';

const MyInfoModify = ({ modifyInfo, modifyInput, onChangeModify }) => {
  // 비밀번호 일치하는지 확인하는 데이터
  const [ PWConfirm, setPWConfirm ] = useState(true);

  // 비밀번호 일치하면 정보 수정 제출하기
  const onSubmitModify = () => {
    if(PWConfirm){
      console.log("눌렷니2");
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
    <button onClick={onSubmitModify}>수정하기</button>
    <button>취소하기</button>
  </>
  );
};

export default MyInfoModify;