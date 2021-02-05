import client from './client';

// 전체 미션 목록 조회 ( 검색 조건에 따라 )
export const getMissionList = ({ searchType, sortType, keyword, keywordType, pageNum }) => {
    return client({
        url: 'mission',
        method: 'post',
        data : { searchType, sortType, keyword, keywordType, pageNum },
    });
}

// 현재 조회중인 미션 정보 조회
export const getMission = ({ email, missionId }) => {
    return client({
        url: `mission/${email}/${missionId}`,
        method: 'get',
    });
}

// 특정 유저의 미션 목록 조회
export const getMyMissionList = ({ email }) => {
    return client({
        url: `mission/user/${email}`,
        method: 'get',
    });
}

// 특정 유저의 진행중 / 진행완료 미션 목록 조회
export const getMyTodoMissionList = ({ email, todo }) => {
    return client({
        url: `mission/user/${email}`,
        method: 'post',
        data: { email, todo },
    });
}

// 미션 제작
export const setMission = (
    { email, title, content, xmlCode, image, difficulty, 
        startPositionX, startPositionY, endPositionX, endPositionY }) => {
        return client({
            url: `mission/${email}`,
            method: 'post',
            data : { email, title, content, xmlCode, image, difficulty, 
                startPositionX, startPositionY, endPositionX, endPositionY },        
        }
    );
}

// 미션 수정
export const modifyMission = (
    { email, missionId, title, content }) => {
        return client({
            url: `mission/${missionId}`,
            method: 'put',
            data : { email, missionId, title, content },        
        }
    );
}

// 미션 삭제
export const deleteMission = ({ missionId, email }) => {
    return client({
        url: `mission/${missionId}`,
        method: 'delete',
        data: { email, missionId },       
    });
}

// 미션 좋아요
export const setLikeMission = ({ email, missionId, favorite }) => {
    return client({
        url: `mission/like`,
        method: 'post',
        data : { email, missionId, favorite },        
    });
}

// 미션 난이도 설정
export const setDifficultyMission = ({ email, missionId, difficulty }) => {
    return client({
        url: `mission/difficult`,
        method: 'post',
        data: { email, missionId, difficulty },        
    });
}

// 미션 참여 / 답 제출완료 설정
export const setTodoMission = ({ email, missionId, todo }) => {
    return client({
        url: 'mission/todo',
        method: 'post',
        data: { email, missionId, todo },
    })
}