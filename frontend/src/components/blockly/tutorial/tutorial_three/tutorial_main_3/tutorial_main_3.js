import React, {useState} from 'react';
import styles from './tutorial_main_3.module.css'

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

import TutorialNavbar3 from '../tutorial_navbar_3/tutorial_navbar_3';
import TutorialPlayground3 from '../tutorial_playground_3/tutorial_playground_3';
import ModalSuccess3 from '../modal_3/modal_success_3/modal_success_3';
import ModalFail3 from '../modal_3/modal_fail_3/modal_fail_3';

import Modal3Step0 from '../modal_3/modal3_step_0/modal3_step_0';
import Modal3Step1 from '../modal_3/modal3_step_1/modal3_step_1';

const TutorialMain3 = ({ info, GoMyPage }) => {
  const { 
    id,
    title, initialXml, toolboxCategories, 
    map_image, character_image, 
    icon_status,
  } = info;

  const [modal_success_state, setModal_success_state] = useState(false);
  const [modal_fail_state, setModal_fail_state] = useState(false);

  const [activeDrags, setActiveDrags] = useState(0);
  const [modal, setModal] = useState(true);
  const [javascript, setJavascript] = useState();

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
  const [modal3_step_0, setModal3_step_0] = useState(true)
  const [modal3_step_1, setModal3_step_1] = useState(false)

  const retutorial = () => {
    setModal3_step_1(true)
  };

  const change_modal3_step_0 = () => {
    setModal3_step_0(false)
    setModal3_step_1(true)
  }
  const change_modal3_step_1 = () => {
    setModal3_step_1(false)
  }
  //########################################

  function workspaceDidChange(workspace) {
    setJavascript(Blockly.JavaScript.workspaceToCode(workspace))
  }

  return (
    <div className={styles.body}>
      {modal3_step_0 && <Modal3Step0 change_modal3_step_0={change_modal3_step_0}/>}
      {modal3_step_1 && <Modal3Step1 change_modal3_step_1={change_modal3_step_1}/>}


      {modal_success_state && <ModalSuccess3 GoMyPage={GoMyPage}/>}
      {modal_fail_state && <ModalFail3 reStart={reStart}/>}


      <TutorialNavbar3 
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
              <TutorialPlayground3 
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

export default TutorialMain3;