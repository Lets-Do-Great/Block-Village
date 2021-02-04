import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionDoSubmain from '../components/blockly/mission_do/mission_do_submain/mission_do_submain';
import * as MissionAction from '../modules/mission';

const EditorAnswerContainer = (props) => {
  const [todo, setTodo] = useState('todo');

  const onChangeTodo = () => {
    setTodo('done')
  };

  const email = useSelector(state => state.user.email);
  const selectedMission = useSelector(state => state.mission.selectedMission);
  const dispatch = useDispatch();

  useEffect(() => {

  })

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
        difficulty: 0,
      }))
    } catch(e) {
      console.log(e);
    }
  };

  
  return (
    <>
      <MissionDoSubmain
        onChangeTodo={onChangeTodo}
        onSetTodoMission={onSetTodoMission}
        onSetDifficultyMission={onSetDifficultyMission}
      />
    </>
  )
}

export default EditorAnswerContainer;