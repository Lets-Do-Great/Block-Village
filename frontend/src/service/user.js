/*
    서버한테 유저 관련 요청 보낼 함수 세팅 파일
    각 요청함수 별로 요청이 성공 / 실패로 왔을 경우
        response, error문은 이 함수를 사용하는 곳에서 작성
*/

import client from './client';

// 로그인 정보 확인
export const logIn = ({ email:name, password }) => {
    return client({
        url: `member/pwcheck`,
        method: 'post',
        data: { id:2, name, password },
    });
}

// 회원 가입 하기
export const joinUserInfo = (
    { emailId, emailSite, nickName:name, password }) => {
        client({
            url: `member`,
            method: 'post',
            data: { emailId, emailSite, name, password },
        }
    );
}

// 회원 정보 조회
export const getUserInfo = ( email ) => {
    client({
       url: `member/${email}`,
       method: 'get', 
    });
}

// 회원 정보 수정
export const modifyUserInfo = (
    { email, nickname, prevPassword, newPassword }) => {
        client({
            url: ``,
            method: 'put',
            data: { email, nickname, prevPassword, newPassword },
        }
    )
}

// 회원 탈퇴 하기
export const deleteUserInfo = ( email ) => {
    client({
       url: `${email}`,
       method: 'delete', 
    });
}

// 비밀번호 찾기
export const findPW = ( email ) => {
    client({
        url: `${email}`,
        method: 'get',
    })
}