import React, {useState} from 'react';
import styles from './tutorial_main_2.module.css'

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

import TutorialNavbar2 from '../tutorial_navbar_2/tutorial_navbar_2';
import TutorialPlayground2 from '../tutorial_playground_2/tutorial_playground_2';
import ModalSuccess2 from '../modal_2/modal_success_2';
import ModalFail2 from '../modal_2/modal_fail_2';

const TutorialMain2 = ({ info, GoThree }) => {
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
  //########################################

  function workspaceDidChange(workspace) {
    setJavascript(Blockly.JavaScript.workspaceToCode(workspace))
  }

  return (
    <div className={styles.body}>
      <ModalSuccess2 
        modal_success_state={modal_success_state}
        GoThree={GoThree}
      />

      <ModalFail2 
        modal_fail_state={modal_fail_state}
        reStart={reStart}
      />


      <TutorialNavbar2 
        title={title}
        modal={modal} 
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
              <TutorialPlayground2 
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

export default TutorialMain2;