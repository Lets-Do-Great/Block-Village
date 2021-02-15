import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as MissionAction from '../modules/mission';
import * as AnswerAction from '../modules/answer';
import * as BlockAction from '../modules/block';
import { useHistory } from 'react-router-dom';
import AnswerModifySubmain from '../components/blockly/answer_modify/answer_modify_submain/answer_modify_submain';

const ModifyAnswerContainer = (props) => {
  const userInfo = useSelector(state => state.user.userInfo);
  const selectedMission = useSelector(state => state.mission.selectedMission);
  const selectedAnswer = useSelector(state => state.answer.selectedAnswer);
  const history = useHistory();
  const dispatch = useDispatch();

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

  const onSetDifficultyMission = async () => {
    try {
      await dispatch(MissionAction.setDifficultyMission({
        email: userInfo.email,
        missionId: selectedMission.id,
        difficulty: useDifficulty,
      }))
      history.push(`/main/answer/${selectedMission.id}`)
    } catch(e) {
      console.log(e);
    }
  };

  const onModifyAnswer = async () => {
    const newXml = xmlCode.replace(/"/gi, '\"');
    try {
      await dispatch(AnswerAction.modifyAnswer({
        email: userInfo.email,
        content: useContent,
        answerId: selectedAnswer.id,
        title: `${userInfo.nickname}님의 ${selectedMission.id}번 미션 답안`,
        javascriptCode: javascriptCode,
        xmlCode: newXml,
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
      <AnswerModifySubmain 
        selectedMission={selectedMission}
        setUseDifficulty={setUseDifficulty}
        setUseContent={setUseContent}
        onModifyAnswer={onModifyAnswer}
        onChangeXmlContainer={onChangeXmlContainer}
        onChangeJavascriptContainer={onChangeJavascriptContainer}
        selectedAnswer={selectedAnswer}
      />
    </>
  )
};

export default ModifyAnswerContainer;