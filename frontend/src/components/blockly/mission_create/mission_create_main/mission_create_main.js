import styles from './mission_create_main.module.css';

import Draggable from 'react-draggable';

import '../../all_blocks/start_blocks';
import '../../all_blocks/judgement_blocks';
import '../../all_blocks/flow_blocks';
import '../../all_blocks/calculation_blocks';
import '../../all_blocks/movement_blocks';
import '../../all_blocks/drawing_blocks';
import '../../all_blocks/function_blocks';

import React, {useEffect, useState} from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';

import MissionCreateNavbar from '../mission_create_navbar/mission_create_navbar';
import MissionCreatePlayground from '../mission_create_playground/mission_create_playground';

const MissionCreateMain = ({ formInfo, myBlocksInfo, onChangeModal, onChangeXml, onChangeStep }) => {
  const [moveStep, setMoveStep] = useState([]);
  const { 
    xmlCode, 
    startPosition,
    stepPosition,
    endPosition,
    type,
  } = formInfo;
  const toolboxCategories = myBlocksInfo

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
      'toolboxBackgroundColour': '#7844AA',
      'toolboxForegroundColour': '#FFFFFF',
      'flyoutBackgroundColour': '#e3c0ff',
      'flyoutForegroundColour': '#e3c0ff',
      'flyoutOpacity': '#e3c0ff',
      'scrollbarColour': '#e3c0ff',
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

  const workspaceDidChange = (workspace) => {
    // save 형태
    console.log(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)));
    onChangeXml(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)))
    console.log(Blockly.JavaScript.workspaceToCode(workspace));
    setJavascript(Blockly.JavaScript.workspaceToCode(workspace))
  };

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const statusModal = () => {
    setModal(!modal)
    // onChangeStep()
  };

  const onChangeModalMain = () => {
    setModal(false)
    onChangeModal();
  }

  useEffect(() => {
    if(!modal) {
      onChangeStep(moveStep);
    }
  }, [modal]);

  
  return (
    <section className={styles.page_style}>
      <MissionCreateNavbar 
        modal={modal} 
        type={type}
        statusModal={statusModal} 
        onChangeModal={onChangeModalMain} 
      />
      <div className={styles.container}>
        {modal && 
          <Draggable
            onStart={onStart}
            onStop={onStop}
            bounds="parent"
          >
            <div className={styles.playground}>
              <MissionCreatePlayground 
                setMoveStep={setMoveStep}
                javascript_code={javascript}
                startPosition={startPosition}
                endPosition={endPosition}
                onChangeStep={onChangeStep}  
              />
            </div>
          </Draggable>
        }
        <div className={styles.workspace_cata}>
          <div className={styles.workspace}>
            <ReactBlockly
              toolboxCategories={toolboxCategories}
              initialXml={xmlCode}
              wrapperDivClassName={styles.fill_height}
              workspaceConfiguration={{
                grid: {
                  spacing: 20,
                  length: 2,
                  colour: '#e3c0ff',
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
                  pinch: true},
                trashcan: true,
                renderer : "Zelos",
                theme: theme,
              }}
              workspaceDidChange={workspaceDidChange}
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default MissionCreateMain;