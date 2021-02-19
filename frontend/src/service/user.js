/*
    서버한테 유저 관련 요청 보낼 함수 세팅 파일
    각 요청함수 별로 요청이 성공 / 실패로 왔을 경우
        response, error문은 이 함수를 사용하는 곳에서 작성
*/

import client from './client';

// 로그인 정보 확인
export const logIn = ({ email, password }) => {
  return client({
    url: `users/do/login`,
    method: 'post',
    data: { email, password },
  });
};

// 회원 가입 하기
export const setUserInfo = ({ emailId, emailSite, nickname, password }) => {
  return client({
    url: `users/do`,
    method: 'post',
    data: { emailId, emailSite, nickname, password },
  });
};

// 회원 정보 조회
export const getUserInfo = (email, token) => {
  return client({
    url: `users/${email}`,
    method: 'get',
  });
};

// 회원 정보 수정
export const modifyUserInfo = ({ email, nickname, profileImage, prevPassword, newPassword, introduction,}) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('nickname', nickname);
  formData.append('prevPassword', prevPassword);
  formData.append('newPassword', newPassword);
  formData.append('introduction', introduction);

  if(profileImage === null) {
    formData.append('change', 'delete');
  }
  else if(typeof profileImage === 'object'){
    formData.append('profileImage', profileImage);
  }

  return client({
    url: `users`,
    method: 'put',
    data: formData,
  })
};

// 회원 탈퇴 하기
export const deleteUserInfo = (email) => {
  return client({
    url: `users/${email}`,
    method: 'delete',
  });
};

// 비밀번호 찾기
export const findPW = (email) => {
  return client({
    url: `users/do/${email}`,
    method: 'post',
  });
};

// 마일리지 변경
export const changeMileage = ({ email, mileage }) => {
  return client({
    url: `users/do/mileage`,
    method: 'post',
    data: { email, mileage },
  })
}

