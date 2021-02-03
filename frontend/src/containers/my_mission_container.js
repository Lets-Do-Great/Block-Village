import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MyDetailCardForm from '../components/my_page/my_list/my_datail_card_form/my_detail_card_form';
import MyListCategory from '../components/my_page/my_list/my_list_category/my_list_category';
import MyListForm from '../components/my_page/my_list/my_list_form/my_list_form';
import * as MissionAction from '../modules/mission';

const MyMissionContainer = () => {
    const [ category, setCategory ] = useState('myMission');
    const [ detailComponent, setDetailComponent ] = useState(false);

    // store에 있는 state와 dispatch 가져오는 작업
    const userInfo = useSelector(state => state.user.userInfo);
    const missionList = useSelector(state => state.mission.missionList);
    // const answerList = useSelector(state => state.mission.answerList);
    const selectedMission = useSelector(state => state.mission.selectedMission);
    // const selectedAnswer = useSelector(state => state.mission.selectedAnswer);
    const dispatch = useDispatch();

    useEffect(() => {
        getMyMissionList();
    }, []);

    // 카테고리 변경시 새로 요청 보내기 처리
    useEffect(() => {
        if(category === 'myMission') {
            getMyMissionList();
        } else if(category === 'makingAnswer') {
            getMissionList();
        } else if(category === 'myAnswer') {
            // getMyAnswerList();
        }
    }, [ category ]);

    const onChangeCategory = (e) => {
        setCategory(e.target.value);
    }

    const onOpenDetail = () => {
        setDetailComponent(true);
    }

    const onCloseDetail = () => {
        setDetailComponent(false);
    }

    /*
    api 요청 보내는 함수
    */
    // 내가 만든 미션 리스트 조회
    const getMyMissionList = async () => {
        try{
            await dispatch(MissionAction.getMyMissionList({ email: userInfo.email }));
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

    // 미션 전체 리스트 조회
    const getMissionList = async () => {
        try{
            // await dispatch(MissionAction.getMissionList(search));
        } catch(e) {
            console.log(e);
        }
    }

    // 미션 수정 요청
    const onModifyMission = async () => {
        // await dispatch(MissionAction.deleteMission(
        //     { email: userInfo.email, missionId:selectedMission.missionId }));
    }

    // 미션 삭제 요청
    const onDeleteMission = async () => {
        await dispatch(MissionAction.deleteMission(
            { email: userInfo.email, missionId:selectedMission.missionId }));
    }
    
    // 내가 만든 답안 리스트 조회
    // const getMyAnswerList = async () => {
    //     try{
    //         await dispatch(AnswerAction.getMyAnswerList({ email: userInfo.email }));
    //     } catch(e) {
    //         console.log(e);
    //     }
    // }
    
    return (<>
            
        { detailComponent
            ? ( <>
                { category !== 'myAnswer' && 
                    <MyDetailCardForm
                        detail={selectedMission}
                        onModify={onModifyMission}
                        onDelete={onDeleteMission}
                        onCloseDetail={onCloseDetail}/> }
                { category === 'myAnswer' && 
                    <MyDetailCardForm
                        // detail={selectedAnswer}
                        // onModify={onModifyMission}
                        // onDelete={onDeleteMission}
                        // onCloseDetail={onCloseDetail}
                    /> }
            </> )
            : (<> 
                <MyListCategory
                    onChangeCategory={onChangeCategory}/>
                
                { category !== 'myAnswer' &&
                    <MyListForm
                        list={missionList}
                        getList={getMyMissionList}
                        getDetail={getMission}
                        onDelete={onDeleteMission}
                        onOpenDetail={onOpenDetail}/> }
                { category === 'myAnswer' &&
                    <MyListForm
                        // list={answerList}
                        />
                }
            </>)
        }
    </>);
}

export default MyMissionContainer;