import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCreateSubmain from '../components/blockly/mission_create/mission_create_submain/mission_create_submain';
import MissionModifyForm from '../components/blockly/mission_modify_form/mission_modify_form';
import * as MissionAction from '../modules/mission';

const EditorMissionContainer = ( { type }) => {
  const [createInfo, setCreateInfo] = useState({
    email: '',
    title: '',
    content: '', 
    image: '',
    xmlCode: '<xml xmlns="https://developers.google.com/blockly/xml"></xml>', 
    startPositionX: 50,
    startPositionY: 50,
    endPositionX: 0,
    endPositionY: 0,
    difficulty: 0,
  });

  const onChangeState = (e) => {
    const newState = {
      title: e.title,
      content: e.content, 
      image: '',
      xmlCode: e.xmlCode, 
      startPositionX: e.startPosition[0],
      startPositionY: e.startPosition[1],
      endPositionX: e.endPosition[0],
      endPositionY: e.endPosition[1],
      difficulty: e.difficulty,
    }
    setCreateInfo(newState)
  };

  const userInfo = useSelector(state => state.user.userInfo);
  const selectedMission = useSelector(state => state.mission.selectedMission);
  const dispatch = useDispatch();


  const onSetMission = async () => {
    const newXml = createInfo.xmlCode.replace(/"/gi, '\\"')
    try {
      await dispatch(MissionAction.setMission({
        ...createInfo,
        email: userInfo.email,
        xmlCode: newXml
      }))
    } catch(e) {
      console.log(e);
    }
  };

  const onModifyMission = async (e) => {
    try {
      await dispatch(MissionAction.modifyMission({
        title: e.title,
        content: e.content
      }))
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
    { type === 'create' && 
      <MissionCreateSubmain 
        onChangeState={onChangeState}
        onSetMission={onSetMission}
      />
    }
    {type === 'modify' && 
      <MissionModifyForm
        title={selectedMission.title}
        content={selectedMission.content}
        onModifyMission={onModifyMission}
      />
    }
    </>
  )
}

export default EditorMissionContainer;