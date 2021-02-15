/*
    서버한테 유저 관련 요청 보낼 함수 세팅 파일
    각 요청함수 별로 요청이 성공 / 실패로 왔을 경우
        response, error문은 이 함수를 사용하는 곳에서 작성
*/

import client from './client';

// 전체 챌린지 목록 불러오기 ( 최신순 )
export const getChallengeList = ({ email }) => {
  return client({
    url: `challenges/${email}`,
    method: 'get',
  });
};

// 특정 유저가 참가한 챌린지 목록 불러오기
export const getMyChallengeList = ({ email, todo }) => {
  return client({
    url: `challenges/${email}/${todo}`,
    method: 'get',
  });
};

// 현재 로그인한 유저가 챌린지 참여하기
export const setTodoChallenge = ({ email, todo, challengeId }) => {
  return client({
    url: `challenges/${challengeId}/${email}/${todo}`,
    method: 'post',
  });
};