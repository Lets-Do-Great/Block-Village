import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionDoSubmain from '../components/blockly/mission_do/mission_do_submain/mission_do_submain';
import * as MissionAction from '../modules/mission';
import * as AnswerAction from '../modules/answer';

const EditorAnswerContainer = (props) => {
  const [todo, setTodo] = useState('todo');
  const [useDifficulty, setUseDifficulty] = useState(0);
  const [useContent, setUseContent] = useState('');
  const [answerInfo, setAnswerInfo] = useState({
    javascriptCode: '',
    xmlCode: '',
  });

  const onChangeTodo = () => {
    setTodo('done')
  };

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
  const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
  const dispatch = useDispatch();

  const onSetTodoMission = async () => {
    try {
      await dispatch(MissionAction.setTodoMission({
        email: userInfo.email,
        missionId: selectedMission.id,
        todo: todo,
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
    } catch(e) {
      console.log(e);
    }
  };

  const onSetAnswer = async () => {
    try {
      await dispatch(AnswerAction.setAnswer({
        email: userInfo.email,
        content: useContent,
        missionId: selectedMission.id,
        title: `${userIfno.nickname}님의 ${selectedMission.id}번 미션 답안`,
        javascriptCode: answerInfo.javascriptCode,
        xmlCode: answerInfo.xmlCode,
      }))
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <>
      <MissionDoSubmain
        myBlocksInfo={myBlocksInfo}
        missionInfo={selectedMission}
        setUseDifficulty={setUseDifficulty}
        setUseContent={setUseContent}
        onChangeTodo={onChangeTodo}
        onSetTodoMission={onSetTodoMission}
        onSetDifficultyMission={onSetDifficultyMission}
        onSetAnswer={onSetAnswer}
        onChangeXmlContainer={onChangeXmlContainer}
        onChangeJavascriptContainer={onChangeJavascriptContainer}
      />
    </>
  )
}

export default EditorAnswerContainer;