import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import MissionDoMain from '../mission_do_main/mission_do_main';
import MissionDoModalSuccess from '../mission_do_modal/mission_do_modal_success/mission_do_modal_success';
import MissionDoModalFail from '../mission_do_modal/mission_do_modal_fail/mission_do_modal_fail';
import styles from './mission_do_submain.module.css';

const MissionDoSubmain = ({ selectedMission, setUseDifficulty, setUseContent, onSetAnswer, 
                          onChangeXmlContainer, onChangeJavascriptContainer }) => {
                            
  const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const [formInfo, setFormInfo] = useState({
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
    toolboxCategories: [],
    startPosition: [selectedMission.startPositionX, selectedMission.startPositionY],
    stepPosition: [],
    endPosition: [selectedMission.endPositionX, selectedMission.endPositionY],
    title: selectedMission.title,
    javascript: '',
    difficulty: selectedMission.difficulty,
    imageUrl: selectedMission.imageUrl
  });

  const onChangeXml = (e) => {
    setFormInfo({
      ...formInfo,
      initialXml: e,
    });
    onChangeXmlContainer(e);
  };

  const onChangeJavascript = (e) => {
    setFormInfo({
      ...formInfo,
      javascript: e,
    });
    onChangeJavascriptContainer(e);
  }

  const onChangeSuccess = () => {
    setSuccessModal(!successModal);
  };

  const onChangeFail = () => {
    setFailModal(!failModal);
  };

  const onSubmitDifficulty = () => {
    onSetAnswer(formInfo.difficulty);
  };

  return (
    <div className={styles.body}>
      {successModal && 
        <MissionDoModalSuccess 
          onSubmitDifficulty={onSubmitDifficulty}
          setUseDifficulty={setUseDifficulty}
          setUseContent={setUseContent}
        />
      }
      {failModal && 
        <MissionDoModalFail
          onChangeFail={onChangeFail}
        />
      }
      <MissionDoMain 
        formInfo={formInfo}
        myBlocksInfo={myBlocksInfo}
        onChangeJavascript={onChangeJavascript}
        onChangeXml={onChangeXml}
        onChangeSuccess={onChangeSuccess}
        onChangeFail={onChangeFail}
      />
    </div>
  )
}

export default MissionDoSubmain;