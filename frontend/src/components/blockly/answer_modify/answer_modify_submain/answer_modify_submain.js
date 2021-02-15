import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AnswerModifySuccess from '../answer_modify_success/answer_modify_success';
import MissionDoModalFail from '../../mission_do/mission_do_modal/mission_do_modal_fail/mission_do_modal_fail';
import MissionDoMain from '../../mission_do/mission_do_main/mission_do_main';

import styles from './answer_modify_submain.module.css';
import { selected } from 'blockly';

const AnswerModifySubmain = ({ selectedMission, setUseDifficulty, setUseContent, onModifyAnswer, 
  onChangeXmlContainer, onChangeJavascriptContainer, selectedAnswer }) => {

  const myBlocksInfo = useSelector(state => state.block.myBlocksInfo);
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const [formInfo, setFormInfo] = useState({
    initialXml: selectedAnswer.xmlCode,
    toolboxCategories: [],
    startPosition: [selectedMission.startPositionX, selectedMission.startPositionY],
    stepPosition: [],
    endPosition: [selectedMission.endPositionX, selectedMission.endPositionY],
    title: selectedMission.title,
    javascript: '',
    difficulty: selectedMission.difficulty,
  });

  // useEffect(() => {
  //   setFormInfo({
  //     ...formInfo,
  //     initialXml: selectedAnswer.xmlCode,
  //     javascript: selectedAnswer.javascriptCode,
  //   })
  // }, [])

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
    onModifyAnswer();
  };

  return (
    <div className={styles.body}>
      {successModal && 
        <AnswerModifySuccess
          onSubmitDifficulty={onSubmitDifficulty}
          setUseDifficulty={setUseDifficulty}
          setUseContent={setUseContent}
          selectedAnswer={selectedAnswer}
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
};

export default AnswerModifySubmain;