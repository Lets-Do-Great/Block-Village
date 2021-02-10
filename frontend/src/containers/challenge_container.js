import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChallengeMain from '../components/blockly/challenge/challenge_main/challenge_main';
import * as ChallengeAction from '../modules/challenge';

const ChallengeContainer = () => {

  // store에 있는 state와 dispatch 가져오는 작업
  const userInfo = useSelector(state => state.user.userInfo);
  const allBlcoksInfo = useSelector(state => state.challenge.allBlcoksInfo);
  const challengeList = useSelector(state => state.challenge.challengeList);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("두고봐");
    getChallengeList();
  }, []);

  /*
    api 요청 보내는 함수
  */
  // 전체 챌린지 목록 불러오기 ( 최신순 )
  const getChallengeList = async () => {
    try{
      dispatch(ChallengeAction.getChallengeList({ email: userInfo.email }));
    } catch(e) {
      console.log(e);
    }
  }

  // 특정 유저가 참가중인 챌린지 목록 불러오기
  const getMyTodoChallengeList = async () => {
    try{
      dispatch(ChallengeAction.getMyChallengeList(
        { email: userInfo.email, todo: 'todo'}
      ));
    } catch(e) {
      console.log(e);
    }
  }

  // 특정 유저가 참가중인 챌린지 목록 불러오기
  const getMyDoneChallengeList = async () => {
    try{
      dispatch(ChallengeAction.getMyChallengeList(
        { email: userInfo.email, todo: 'Done'}
      ));
    } catch(e) {
      console.log(e);
    }
  }

  // 현재 로그인한 유저가 챌린지 참여하기
  const setTodoChallenge = async ( id ) => {
    try{
      dispatch(ChallengeAction.setTodoChallenge(
        { email: userInfo.email, todo: 'todo', challengeId: id }
      ));
      getChallengeList();
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <ChallengeMain 
        challengeList={challengeList}
        setTodoChallenge={setTodoChallenge}
      />
    </>
  );
};

export default ChallengeContainer;