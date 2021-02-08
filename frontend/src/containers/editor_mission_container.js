import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCreateSubmain from '../components/blockly/mission_create/mission_create_submain/mission_create_submain';
import * as MissionAction from '../modules/mission';

const EditorMissionContainer = () => {
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

  const userInfo = useSelector(state => state.user.userInfo);
  const dispatch = useDispatch();

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


  return (
    <>
      <MissionCreateSubmain 
        onChangeState={onChangeState}
        onSetMission={onSetMission}
      />
    </>
  )
}

export default EditorMissionContainer;