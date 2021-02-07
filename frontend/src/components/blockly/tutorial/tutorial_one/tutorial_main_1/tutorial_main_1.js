import React, {useState} from 'react';
import styles from './tutorial_main_1.module.css'

import Draggable from 'react-draggable';

import '../../../all_blocks/start_blocks';
import '../../../all_blocks/judgement_blocks';
import '../../../all_blocks/flow_blocks';
import '../../../all_blocks/calculation_blocks';
import '../../../all_blocks/movement_blocks';
import '../../../all_blocks/drawing_blocks';
import '../../../all_blocks/function_blocks';

import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';

import TutorialNavbar from '../tutorial_navbar_1/tutorial_navbar_1';
import TutorialPlayground from '../tutorial_playground_1/tutorial_playground_1';
import ModalSuccess1 from '../modal_1/modal_success_1/modal_success_1';
import ModalFail1 from '../modal_1/modal_fail_1/modal_fail_1';

import ModalStep0 from '../modal_1/modal_step_0/modal_step_0';
import ModalStep1 from '../modal_1/modal_step_1/modal_step_1';
import ModalStep2 from '../modal_1/modal_step_2/modal_step_2';
import ModalStep3 from '../modal_1/modal_step_3/modal_step_3';
import ModalStep4 from '../modal_1/modal_step_4/modal_step_4';
import ModalStep5 from '../modal_1/modal_step_5/modal_step_5';
import ModalStep6 from '../modal_1/modal_step_6/modal_step_6';
import ModalStep7 from '../modal_1/modal_step_7/modal_step_7';

const TutorialMain1 = ({ info, GoTwo }) => {
  const { 
    id,
    title, initialXml, toolboxCategories, 
    map_image, character_image, 
    icon_status,
  } = info;

  const [activeDrags, setActiveDrags] = useState(0);
  const [modal, setModal] = useState(true);
  const [javascript, setJavascript] = useState();

  const [modal_success_state, setModal_success_state] = useState(false);
  const [modal_fail_state, setModal_fail_state] = useState(false);


  const theme = {
    'blockStyles' : {
      "start-blocks": {
        "colourPrimary": "#C30D23",
        "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },

      "judgement-blocks": {
        "colourPrimary": "#FFA31D",
         "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },

      "movement-blocks": {
        "colourPrimary": "#8FC31F",
        "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },

      "flow-blocks": {
        "colourPrimary": "#55CFFF",
        "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },
      "calculation-blocks": {
        "colourPrimary": "#1060FF",
        "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },
      "drawing-blocks": {
        "colourPrimary": "#7D10C4",
        "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },
      "function-blocks": {
        "colourPrimary": "#CC6666",
        "colourSecondary":"#AD7BE9",
        "colourTertiary":"#141414"
      },
    },
    'componentStyles' : {
      // 'workspaceBackgroundColour': '#1e1e1e',
      'toolboxBackgroundColour': '#F7C469',
      'toolboxForegroundColour': '#FFFFFF',
      'flyoutBackgroundColour': '#FFDEA4',
      'flyoutForegroundColour': '#1e1e1e',
      'flyoutOpacity': '#1e1e1e',
      'scrollbarColour': '#EFA420',
      'scrollbarOpacity': 0.5,
      // 'insertionMarkerColour': '#1e1e1e',
      // 'insertionMarkerOpacity': '#1e1e1e',
    },
    'fontStyle': {
      // "family": "Georgia, serif",
      "weight": "bold",
      "size": 12,
    }
  };

  // play ground 관련 function
  const onChangeModalSuccess = () => {
    setModal(false)
    setModal_success_state(true)
  };

  const onChangeModalFail = () => {
    setModal(false)
    setModal_fail_state(true)
  };

  const reStart = () => {
    setModal(true)
    setModal_fail_state(false)
  }

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const statusModal = () => {
    setModal(!modal)
  };


  //==========================================
  const [modal_step_0, setModal_step_0] = useState(true)
  const [modal_step_1, setModal_step_1] = useState(false)
  const [modal_step_2, setModal_step_2] = useState(false)
  const [modal_step_3, setModal_step_3] = useState(false)
  const [modal_step_4, setModal_step_4] = useState(false)
  const [modal_step_5, setModal_step_5] = useState(false)
  const [modal_step_6, setModal_step_6] = useState(false)
  const [modal_step_7, setModal_step_7] = useState(false)

  const retutorial = () => {
    setModal_step_1(true)
  };

  const change_modal_step_0 = () => {
    setModal_step_0(false)
    setModal_step_1(true)
  };

  const change_modal_step_1 = () => {
    setModal_step_1(false)
    setModal_step_2(true)
  };

  const change_modal_step_2 = () => {
    setModal_step_2(false)
    setModal_step_3(true)
  };

  const change_modal_step_3 = () => {
    setModal_step_3(false)
    setModal_step_4(true)
  };

  const change_modal_step_4 = () => {
    setModal_step_4(false)
    setModal_step_5(true)
  };

  const change_modal_step_5 = () => {
    setModal_step_5(false)
    setModal_step_6(true)
  };

  const change_modal_step_6 = () => {
    setModal_step_6(false)
    setModal_step_7(true)
  };

  const change_modal_step_7 = () => {
    setModal_step_7(false)
  };
  
  //########################################

  function workspaceDidChange(workspace) {
    setJavascript(Blockly.JavaScript.workspaceToCode(workspace))
  }

  return (
    <div className={styles.body}>
      {modal_step_0 && <ModalStep0 change_modal_step_0={change_modal_step_0}/>}
      {modal_step_1 && <ModalStep1 change_modal_step_1={change_modal_step_1}/>}
      {modal_step_2 && <ModalStep2 change_modal_step_2={change_modal_step_2}/>}
      {modal_step_3 && <ModalStep3 change_modal_step_3={change_modal_step_3}/>}
      {modal_step_4 && <ModalStep4 change_modal_step_4={change_modal_step_4}/>}
      {modal_step_5 && <ModalStep5 change_modal_step_5={change_modal_step_5}/>}
      {modal_step_6 && <ModalStep6 change_modal_step_6={change_modal_step_6}/>}
      {modal_step_7 && <ModalStep7 change_modal_step_7={change_modal_step_7}/>}

      {modal_success_state && <ModalSuccess1 GoTwo={GoTwo}/>}
      {modal_fail_state && <ModalFail1 reStart={reStart}/>}


      <TutorialNavbar 
        title={title}
        modal={modal} 
        retutorial={retutorial}
        statusModal={statusModal} 
        icon_status={icon_status}
      />
      <div className={styles.container}>

        {modal && 
          <Draggable
            onStart={onStart}
            onStop={onStop}
            bounds="parent"
            >
            <div className={styles.playground}>
              <TutorialPlayground 
                javascript_code={javascript} 
                onChangeModalSuccess={onChangeModalSuccess}
                onChangeModalFail={onChangeModalFail}
                
              />
            </div>
          </Draggable>
        }
        <div className={styles.workspace_cata}>
          <div className={styles.workspace}>
            <ReactBlockly
              toolboxCategories={toolboxCategories}
              initialXml={initialXml}
              wrapperDivClassName={styles.fill_height}
              workspaceConfiguration={{
                grid: {
                  spacing: 20,
                  length: 2,
                  colour: '#FFDEA4',
                  snap: true,
                },
                move:{
                  scrollbars: true,
                  drag: true,
                  wheel: false,
                },
                zoom:{
                  controls: true,
                  wheel: true,
                  startScale: 1.0,
                  maxScale: 3,
                  minScale: 0.3,
                  scaleSpeed: 1.2,
                  pinch: true
                },
                trashcan: true,
                renderer : "Zelos",
                theme: theme,
              }}
              workspaceDidChange={workspaceDidChange}
            />
          </div>
        </div>

      </div>
    </div>
  )
};

export default TutorialMain1;