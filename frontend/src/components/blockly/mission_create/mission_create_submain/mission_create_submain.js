import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MissionCreateMain from '../mission_create_main/mission_create_main';
import MissionCreateModal from '../mission_create_modal/mission_create_modal';
import styles from './mission_create_submain.module.css';

const MissionCreateSubmain = ({ onSetMission }) => {
  const history = useHistory();
  const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
  const [TCmodal, setTCmodal] = useState(false);
  const [formInfo, setFormInfo] = useState({
    xmlCode: '<xml xmlns="https://developers.google.com/blockly/xml"></xml>',
    toolboxCategories: [],
    javascriptCode: '',
    startPosition: [50, 50],
    stepPosition: [],
    endPosition: [50, 50],
    type: '미션 제작소',
    title: '',
    content: '',
    difficulty: 0,
    imageUrl: '',
  });	

  const onChangeImage = (e) => {
    console.log(e);
    setFormInfo({
      ...formInfo,
      imageUrl: e.target.files[0],
    })
  }

  const onChangeXml = (e) => {
    setFormInfo({
      ...formInfo,
      xmlCode: e,
    })
  };

  const onChangeStep = (e) => {
    setFormInfo({
      ...formInfo,
      stepPosition: e,
    })
    onChangeEnd(e)
  };

  const onChangeEnd = (move) => {
    let xx = formInfo.startPosition[0];
    let yy = formInfo.startPosition[1];
    for (let i = 0; i < move.length; i++) {
      const new_move_x = move[i][0]
      const new_move_y = move[i][1]
      xx = formInfo.startPosition[0] + (new_move_x * 50)
      yy = formInfo.startPosition[1] - (new_move_y * 50)
    }
    setFormInfo({
      ...formInfo,
      endPosition: [xx - 15 , yy - 15],
    })
  }

  const onChangeModal = () => {
    setTCmodal(!TCmodal)
  };

  const onChangeTC = () => {
    onSetMission(formInfo);
    setTCmodal(!TCmodal)
  };

  const updateState = (event) => {
    setFormInfo(event)
  };

  const onChangeDifficulty = (event) => {
    setFormInfo({
      ...formInfo,
      difficulty: event
    })
  };

  return (
    <div className={styles.body}>
      {TCmodal && 
        <MissionCreateModal 
          formInfo={formInfo}
          onChangeModal={onChangeModal}
          title={formInfo.title}
          onChangeTC={onChangeTC}
          updateState={updateState}
          onChangeDifficulty={onChangeDifficulty}
        />
      }
      <MissionCreateMain 
        formInfo={formInfo}
        myBlocksInfo={myBlocksInfo}
        onChangeModal={onChangeModal}
        onChangeXml={onChangeXml}
        onChangeStep={onChangeStep}
        onChangeEnd={onChangeEnd}
        onChangeImage={onChangeImage}
      />
    </div>
  )
}

export default MissionCreateSubmain;