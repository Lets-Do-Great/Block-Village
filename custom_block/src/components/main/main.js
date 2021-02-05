import React from 'react';
import { useHistory } from 'react-router-dom';

const Main = (props) => {
  const history = useHistory();

  const goTutorial = () => {
    history.push('/main/tutorial_main')
  }

  const goMissionMain = () => {
    history.push('/main/mission_main')
  }

  const goChallenge = () => {
    history.push('/main/challenge_main')
  }

  const goBlockStore = () => {
    history.push('/main/block_store')
  }

  return (
    <>
      <button onClick={goTutorial}>튜토리얼 하러가기</button>
      <button onClick={goMissionMain}>미션 하러가기</button>
      <button onClick={goChallenge}>챌린지 하러가기</button>
      <button onClick={goBlockStore}>블록 상점 가기</button>
    </>
  )
};

export default Main;