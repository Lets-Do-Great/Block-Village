import client from './client';

// 전체 미션 목록 조회 ( 검색 조건에 따라 )
export const getMissionList = ({ searchType, sortType, keyword, keywordType }) => {
    return client({
        url: '',
        method: '',
        data : { searchType, sortType, keyword, keywordType },
    });
}

// 현재 조회중인 미션 정보 조회
export const getMission = ({ missionId }) => {
    return client({
        url: '',
        method: '',
        data : missionId,
    });
}

// 특정 유저의 미션 목록 조회
export const getMyMissionList = ({ userId }) => {
    return client({
        url: '',
        method: '',
        data : userId,
    });
}

// 미션 제작
export const setMission = (
    { userId, missionId, title, content, code, image }) => {
        return client({
            url: '',
            method: '',
            data : { userId, missionId, title, content, code, image },        
        }
    );
}

// 미션 수정
export const modifyMission = (
    { userId, missionId, title, content, code, image }) => {
        return client({
            url: '',
            method: '',
            data : { userId, missionId, title, content, code, image },        
        }
    );
}

// 미션 삭제
export const deleteMission = ({ userId, missionId }) => {
    return client({
        url: '',
        method: '',
        data : { userId, missionId },        
    });
}

// 미션 졸아요
export const likeMission = ({ userId, missionId, like }) => {
    return client({
        url: '',
        method: '',
        data : { userId, missionId, like },        
    });
}

// 미션 난이도 설정
export const difficultyMission = ({ userId, missionId, difficulty }) => {
    return client({
        url: '',
        method: '',
        data : { userId, missionId, difficulty },        
    });
}