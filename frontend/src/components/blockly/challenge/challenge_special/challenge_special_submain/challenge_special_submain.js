import React, { useEffect, useState } from 'react';
import ChallengeDoModalSuccess from '../../challenge_do_modal_success/challenge_do_modal_success';
import MissionDoModalFail from '../../../mission_do/mission_do_modal/mission_do_modal_fail/mission_do_modal_fail';
import styles from './challenge_special_submain.module.css';
import ChallengeSpecialMain from '../challenge_special_main/challenge_special_main';

const ChallengeSpecialSubmain = ({ type, selectedMission, setUseDifficulty, 
                            setUseContent, onSetAnswer, 
                            onChangeXmlContainer, onChangeJavascriptContainer }) => {
                            
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const [formInfo, setFormInfo] = useState({
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
    title: selectedMission.title,
    javascript: '',
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

  const onGoToChallengeList = () => {
    onSetAnswer();
  }

  return (
    <div className={styles.body}>
      {successModal && 
        <ChallengeDoModalSuccess 
          onGoToChallengeList={onGoToChallengeList}/>
      }
      {failModal && 
        <MissionDoModalFail
          onChangeFail={onChangeFail}/>
      }

      <ChallengeSpecialMain 
        formInfo={formInfo}
        onChangeJavascript={onChangeJavascript}
        onChangeXml={onChangeXml}
        onChangeSuccess={onChangeSuccess}
        onChangeFail={onChangeFail}
      />
    </div>
  )
}

export default ChallengeSpecialSubmain;