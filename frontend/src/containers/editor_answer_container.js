import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionDoSubmain from '../components/blockly/mission_do/mission_do_submain/mission_do_submain';
import * as MissionAction from '../modules/mission';

const EditorAnswerContainer = (props) => {
  const [todo, setTodo] = useState('todo');
  const [useDifficulty, setUseDifficulty] = useState(0);

  const onChangeTodo = () => {
    setTodo('done')
  };

  const email = useSelector(state => state.user.email);
  const selectedMission = useSelector(state => state.mission.selectedMission);
  const dispatch = useDispatch();


  const onSetTodoMission = async () => {
    try {
      await dispatch(MissionAction.setTodoMission({
        email: email,
        missionId: selectedMission.missionId,
        todo: todo,
      }))
    } catch(e) {
      console.log(e);
    }
  };

  const onSetDifficultyMission = async () => {
    try {
      await dispatch(MissionAction.setTodoMission({
        email: email,
        missionId: missionId,
        difficulty: useDifficulty,
      }))
    } catch(e) {
      console.log(e);
    }
  };
  return (
    <>
      <MissionDoSubmain
        missionInfo={selectedMission}
        setUseDifficulty={setUseDifficulty}
        onChangeTodo={onChangeTodo}
        onSetTodoMission={onSetTodoMission}
        onSetDifficultyMission={onSetDifficultyMission}
      />
    </>
  )
}

export default EditorAnswerContainer;