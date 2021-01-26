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
export const getMyMissionList = ({ email }) => {
    return client({
        url: '',
        method: '',
        data : email,
    });
}

// 미션 제작
export const setMission = (
    { email, missionId, title, content, code, image }) => {
        return client({
            url: '',
            method: '',
            data : { email, missionId, title, content, code, image },        
        }
    );
}

// 미션 수정
export const modifyMission = (
    { email, missionId, title, content, code, image }) => {
        return client({
            url: '',
            method: '',
            data : { email, missionId, title, content, code, image },        
        }
    );
}

// 미션 삭제
export const deleteMission = ({ email, missionId }) => {
    return client({
        url: '',
        method: '',
        data : { email, missionId },        
    });
}

// 미션 좋아요
export const setLikeMission = ({ email, missionId, like }) => {
    return client({
        url: '',
        method: '',
        data : { email, missionId, like },        
    });
}

// 미션 난이도 설정
export const setDifficultyMission = ({ email, missionId, difficulty }) => {
    return client({
        url: '',
        method: '',
        data : { email, missionId, difficulty },        
    });
}