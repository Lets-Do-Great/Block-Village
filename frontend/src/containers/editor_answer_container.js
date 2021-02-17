import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionDoSubmain from '../components/blockly/mission_do/mission_do_submain/mission_do_submain';
import * as MissionAction from '../modules/mission';
import * as ChallengeAction from '../modules/challenge';
import * as AnswerAction from '../modules/answer';
import * as BlockAction from '../modules/block';
import * as UserAction from '../modules/user';
import { useHistory } from 'react-router-dom';
import ChallengeSpecialSubmain from '../components/blockly/challenge/challenge_special/challenge_special_submain/challenge_special_submain';

const EditorAnswerContainer = ({ match }) => {
  const { type } = match.params;
  const history = useHistory();

  const [useDifficulty, setUseDifficulty] = useState(0);
  const [useContent, setUseContent] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');
  const [xmlCode, setXmlCode] = useState('');

  const onChangeXmlContainer = (e) => {
    setXmlCode(e);
  }

  const onChangeJavascriptContainer = (e) => {
    setJavascriptCode(e);
  }

  // 정답에 대한 info는 pros로 가져올 것.
  const userInfo = useSelector(state => state.user.userInfo);
  const selectedMission = useSelector(state => state.mission.selectedMission);
  const selectedChallenge = useSelector(state => state.challenge.selectedChallenge);
  const dispatch = useDispatch();

  const onSetTodoMission = async () => {
    try {
      await dispatch(MissionAction.setTodoMission({
        email: userInfo.email,
        missionId: selectedMission.id,
        todo: "done",
      }))
    } catch(e) {
      console.log(e);
    }
  };

  const onSetDifficultyMission = async () => {
    try {
      await dispatch(MissionAction.setDifficultyMission({
        email: userInfo.email,
        missionId: selectedMission.id,
        difficulty: useDifficulty,
      }))
      history.push(`/main/answer/${selectedMission.id}`);
    } catch(e) {
      console.log(e);
    }
  };
  
  const onSetMissionAnswer = async (mil) => {
    const newXml = xmlCode.replace(/"/gi, '\"');
    try {
      await dispatch(AnswerAction.setAnswer({
        email: userInfo.email,
        content: useContent,
        missionId: selectedMission.id,
        title: `${userInfo.nickname}님의 ${selectedMission.id}번 미션 답안`,
        javascriptCode: javascriptCode,
        xmlCode: newXml,
        startPositionX: selectedMission.startPositionX,
        startPositionY: selectedMission.startPositionY,
      }));
      onSetDifficultyMission();
      onSetTodoMission();
      changeMileage(mil)
    } catch(e) {
      console.log(e);
    }
  };

  const onSetChallengeAnswer = async () => {
    try {
      await dispatch(ChallengeAction.setTodoChallenge({
        email: userInfo.email,
        todo: "done",
        challengeId: selectedChallenge.challengeId,
      }));
      history.push(`/main/challenge`)
    } catch(e) {
      console.log(e);
    }
  };

  const onGetMyBlocks = async (e) => {
    try {
      await dispatch(BlockAction.getMyBlocks({
        email: userInfo.email
      }))
    } catch(e) {
      console.log(e);
    }
  }

  const changeMileage = async (mil) => {
    try {
      await dispatch(UserAction.changeMileage({
        email: userInfo.email,
        mileage: mil * 10,
      }));
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    onGetMyBlocks();
  }, []);

  return (
    <>
      { type === 'mission' &&
        <MissionDoSubmain
          type={type}
          selectedMission={selectedMission}
          setUseDifficulty={setUseDifficulty}
          setUseContent={setUseContent}
          onSetAnswer={onSetMissionAnswer}
          onChangeXmlContainer={onChangeXmlContainer}
          onChangeJavascriptContainer={onChangeJavascriptContainer}
        />
      }
      { type === 'challenge' &&
        <MissionDoSubmain
          type={type}
          selectedMission={selectedChallenge}
          setUseDifficulty={setUseDifficulty}
          setUseContent={setUseContent}
          onSetAnswer={onSetChallengeAnswer}
          onChangeXmlContainer={onChangeXmlContainer}
          onChangeJavascriptContainer={onChangeJavascriptContainer}
        />
      }
      { type === 'challenge_test' &&
        <ChallengeSpecialSubmain 
          type={type}
          selectedMission={selectedChallenge}
          setUseDifficulty={setUseDifficulty}
          setUseContent={setUseContent}
          onSetAnswer={onSetChallengeAnswer}
          onChangeXmlContainer={onChangeXmlContainer}
          onChangeJavascriptContainer={onChangeJavascriptContainer}
        />
      }
    </>
  )
}

export default EditorAnswerContainer;