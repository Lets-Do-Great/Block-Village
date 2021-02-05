import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListForm from '../components/list/list_form/list_form';
import SearchForm from '../components/list/search_form/search_form';
import SearchType from '../components/list/search_type/search_type';
import * as MissionAction from '../modules/mission';

const MissionContainer = () => {
    // 현재 검색 조건 데이터
    const [search, setSearch] = useState({
        searchType: 'updatedAt',
        sortType: 'decrease',
        keyword: '',
        keywordType: 'title',
        pageNum: 0,
    });

    // 모달 상태 저장
    const [ modal, setModal ] = useState(false);

    // 검색 조건에 따라 미션 리스트 가져오기
    useEffect(() => {
        getMissionList(search);
    }, [ search.searchType, search.sortType ]);

    const onClickEnter = (e) => {
        if(e.code === 'Enter') {
            getMissionList(search);
        }
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
        const { name, value } = e.target;

        setSearch({
            ...search,
            [name]: value,
        });
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
            await dispatch(MissionAction.getMission({ missionId: id, email: userInfo.email }));
        } catch(e) {
            console.log(e);
        }
    }

    // 미션 좋아요 요청
    const likeMission = async () => {
        try{
            await dispatch(MissionAction.setLikeMission(
                { email: userInfo.email, missionId:selectedMission.id, favorite:true }));
        } catch(e) {
            console.log(e);
        }
    }

    // 미션 좋아요 취소 요청
    const dislikeMission = async () => {
        try{
            await dispatch(MissionAction.setLikeMission(
                { email: userInfo.email, missionId:selectedMission.id, favorite:false }));
        } catch(e) {
            console.log(e);
        }
    }

    // 미션 참여 시작 요청
    const onParticipateMission = async () => {
        console.log(selectedMission);
        try{
            await dispatch(MissionAction.setTodoMission(
                { email: userInfo.email, missionId:selectedMission.id, todo:'todo' }));
            getMission(selectedMission.id);
        } catch(e) {
            console.log(e);
        }
    }

    // 미션 삭제 요청
    const onDeleteMission = async () => {
        try{
            await dispatch(MissionAction.deleteMission(
                { email: userInfo.email, missionId:selectedMission.id }));
        } catch(e){
            console.log(e);
        }
    }

    return (
        <>  
            <SearchForm
                onChangeSearch={onChangeSearch}
                onChangeSearchType={onChangeSearchType}
                onClickEnter={onClickEnter}
                search={search}
            /> 

            <SearchType
                onChangeSearchType={onChangeSearchType}
            />

            <ListForm
                type="mission"
                userInfo={userInfo.email}
                list={missionList}
                detail={selectedMission}
                getList={getMissionList}
                getDetail={getMission}
                setLike={likeMission}
                setDislike={dislikeMission}
                onChangeSearchType={onChangeSearchType}
                onDelete={onDeleteMission}
                onParticipateMission={onParticipateMission}
                openDetail={modal}
                setOpenDetail={setModal}
            />
        </>
    );
}

export default MissionContainer;