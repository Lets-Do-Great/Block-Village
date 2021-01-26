 import React, { useEffect } from 'react';
 import { useSelector, useDispatch } from 'react-redux';
 import ListForm from '../../components/list/list_form/list_form';
 import * as MissionAction from '../../modules/mission';

 const MissionContainer = () => {
    // 현재 검색 조건 데이터
    const [search, setSearch] = useState({
        searchType: 'new',
        sortType: 'increase',
        keyword: '',
        keywordType: 'title',
    });

    useEffect(() => {
        getMissionList(search);
    }, [search]);

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

    const changeSearchType = (e) => {
        setSearch({
            ...search,
            searchType: e.target.value,
        })
    }

    // 미션 전체 리스트 조회
    const getMissionList = async () => {
        try{
            await dispatch(MissionAction.getMissionList(search));
        } catch(e) {
            console.log(e);
        }
    }

    // 현재 선택한 미션 조회
    const getMission = async () => {
        try{
            await dispatch(MissionAction.getMissionList(selectedMission.missionId));
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
            <input
                type="text"
                name="keyword"
                value={search.keyword}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요."
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
            
            <button 
                onClick={changeSearchType}
                value="new">NEW</button>
            <button
                onClick={changeSearchType}
                value="like">좋아요 순</button>
            <button 
                onClick={changeSearchType}
                value="people">참여 많은 순</button>
            <button 
                onClick={changeSearchType}
                value="difficulty">난이도 순</button>
        </>
    );
 }

 export default MissionContainer;