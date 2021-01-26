import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChallengeMain from '../components/blockly/challenge/challenge_main/challenge_main';
import * as ChallengeAction from '../modules/challenge';

const ChallengeContainer = () => {

  const allChallengeInfo = useSelector(state => state.challenge.allBlcoksInfo);
  const dispatch = useDispatch();

  const getAllChallenge = async () => {
    // 유저 메일 넣어야 할 것으로 예상
    dispatch(ChallengeAction.getAllChallenge());
  }

  return (
    <>
      <ChallengeMain 
        allChallengeInfo={allChallengeInfo}
      />
    </>
  );
};

export default ChallengeContainer;