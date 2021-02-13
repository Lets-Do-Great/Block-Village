import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionDoSubmain from '../components/blockly/mission_do/mission_do_submain/mission_do_submain';
import * as MissionAction from '../modules/mission';
import * as AnswerAction from '../modules/answer';
import * as BlockAction from '../modules/block';

const EditorAnswerContainer = () => {
  const [useDifficulty, setUseDifficulty] = useState(0);
  const [useContent, setUseContent] = useState('');
  const [answerInfo, setAnswerInfo] = useState({
    javascriptCode: '',
    xmlCode: '',
  });

  const onChangeXmlContainer = (e) => {
    setAnswerInfo({
      ...answerInfo,
      xmlCode: e
    });
  }

  const onChangeJavascriptContainer = (e) => {
    setAnswerInfo({
      ...answerInfo,
      javascriptCode: e
    });
  }

  // 정답에 대한 info는 pros로 가져올 것.
  const userInfo = useSelector(state => state.user.userInfo);
  const selectedMission = useSelector(state => state.mission.selectedMission);
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
      await dispatch(MissionAction.setTodoMission({
        email: userInfo.email,
        missionId: selectedMission.id,
        difficulty: useDifficulty,
      }))
      onSetTodoMission();
    } catch(e) {
      console.log(e);
    }
  };

  const onSetAnswer = async () => {
    const newXml = answerInfo.xmlCode.replace(/"/gi, '\"')
    try {
      await dispatch(AnswerAction.setAnswer({
        email: userInfo.email,
        content: useContent,
        missionId: selectedMission.id,
        title: `${userInfo.nickname}님의 ${selectedMission.id}번 미션 답안`,
        javascriptCode: answerInfo.javascriptCode,
        xmlCode: newXml,
        startPositionX: selectedMission.startPosisionX,
        startPosisionY: selectedMission.startPosisionY,
      }));
      onSetDifficultyMission();
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

  useEffect(() => {
    onGetMyBlocks();
  }, []);

  return (
    <>
      <MissionDoSubmain
        selectedMission={selectedMission}
        setUseDifficulty={setUseDifficulty}
        setUseContent={setUseContent}
        onSetAnswer={onSetAnswer}
        onChangeXmlContainer={onChangeXmlContainer}
        onChangeJavascriptContainer={onChangeJavascriptContainer}
      />
    </>
  )
}

export default EditorAnswerContainer;