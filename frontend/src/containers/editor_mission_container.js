import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionCreateSubmain from '../components/blockly/mission_create/mission_create_submain/mission_create_submain';
import MissionModify from '../components/blockly/mission_modify/mission_modify';
import * as MissionAction from '../modules/mission';
import * as BlockAction from '../modules/block';
import { ContactSupportOutlined } from '@material-ui/icons';

const EditorMissionContainer = ( { type }) => {
  const userInfo = useSelector(state => state.user.userInfo);
  const selectedMission = useSelector(state => state.mission.selectedMission);
  const dispatch = useDispatch();
  
  const onSetMission = async (e) => {
    const newXml = e.xmlCode.replace(/"/gi, '\\"');

    try {
      await dispatch(MissionAction.setMission({
        title: e.title,
        content: e.content,
        startPositionX: e.startPosition[0],
        startPositionY: e.startPosition[1],
        endPositionX: e.endPosition[0],
        endPositionY: e.endPosition[1],
        difficulty: e.difficulty * 1.0,
        email: userInfo.email,
        xmlCode: newXml,
      }));
    } catch(e) {
      console.log(e);
    } finally {
      setBackgroundImage(e);
    }
  };

  const setBackgroundImage = async (e) => {
    try {
      await dispatch(MissionAction.setBackgroundImage({
        email: userInfo.email,
        missionId: selectedMission.id,
        backgroundImage: e.imageUrl,
      }));
    }catch(e) {
      console.log(e);
    }
  }

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

  const onGetMyBlocks = async () => {
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
  }, [])

  return (
    <>
    { type === 'create' && 
      <MissionCreateSubmain 
        onSetMission={onSetMission}
      />
    }
    {type === 'modify' && 
      <MissionModify
        title={selectedMission.title}
        content={selectedMission.content}
        onModifyMission={onModifyMission}
      />
    }
    </>
  )
}

export default EditorMissionContainer;