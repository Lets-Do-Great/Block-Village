/*
    서버한테 유저 관련 요청 보낼 함수 세팅 파일
    각 요청함수 별로 요청이 성공 / 실패로 왔을 경우
        response, error문은 이 함수를 사용하는 곳에서 작성
*/

import client from './client';

// 모든 블럭 조회
export const getAllBlocks = () => {
  client({
    url: ``,
    method: 'get',
  });
};

// 내 블럭 불러오기
export const getMyBlocks = () => {
  client({
    url: ``,
    method: 'get',
  });
};

// 내 블럭 추가하기
export const buyBlocks = () => {
  client({
    url: ``,
    method: 'post',
  });
};