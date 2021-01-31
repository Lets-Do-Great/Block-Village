import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListForm from '../components/list/list_form/list_form';
import SearchForm from '../components/list/search_form/search_form';
import SearchType from '../components/list/search_type/search_type';
import * as MissionAction from '../modules/mission';

const MissionContainer = () => {
// 현재 검색 조건 데이터
const [search, setSearch] = useState({
    searchType: 'new',
    sortType: 'increase',
    keyword: '',
    keywordType: 'title',
});

// 검색 조건에 따라 미션 리스트 가져오기
useEffect(() => {
    getMissionList(search);
}, [ search.searchType, search.sortType ]);

const onClickEnter = () => {
    getMissionList(search);
};

// store에 있는 state와 dispatch 가져오는 작업
const userInfo = useSelector(state => state.user.userInfo);
const missionList = useSelector(state => state.mission.missionList);
const selectedMission = useSelector(state => state.mission.selectedMission);
const dispatch = useDispatch();

// 검색 조건 데이터 변경 처리 함수
const onChangeSearch = (e) => {
    const {name, value} = e.target;

    setSearch({
        ...search,
        [name]: value,
    });
};

const onChangeSearchType = (e) => {
    setSearch({
        ...search,
        searchType: e.target.value,
    })
}

/*
api 요청 보내는 함수
*/
// 미션 전체 리스트 조회
const getMissionList = async () => {
    try{
        await dispatch(MissionAction.getMissionList(search));
    } catch(e) {
        console.log(e);
    }
}

// 현재 선택한 미션 조회
const getMission = async (id) => {
    try{
        await dispatch(MissionAction.getMissionList(id));
    } catch(e) {
        console.log(e);
    }
}

// 미션 좋아요 요청
const likeMission = async () => {
    try{
        await dispatch(MissionAction.setLikeMission(
            { email: userInfo.email, missionId:selectedMission.missionId, like:true }))
    } catch(e) {
        console.log(e);
    }
}

// 미션 좋아요 취소 요청
const dislikeMission = async () => {
    try{
        await dispatch(MissionAction.setLikeMission(
            { email: userInfo.email, missionId:selectedMission.missionId, like:false }))
    } catch(e) {
        console.log(e);
    }
}

return (
    <>  
        <SearchForm
            onChangeSearch={onChangeSearch}
            onClickEnter={onClickEnter}
            search={search}
        /> 

        <SearchType
            onChangeSearch={onChangeSearch}
        />

        <ListForm
            list={missionList}
            detail={selectedMission}
            getList={getMissionList}
            getDetail={getMission}
            setLike={likeMission}
            setDislike={dislikeMission}
            onChangeSearch={onChangeSearch}
        />
    </>
);
}

export default MissionContainer;