import styles from './mission_do_main.module.css';

import Draggable from 'react-draggable';

import '../../all_blocks/start_blocks';
import '../../all_blocks/judgement_blocks';
import '../../all_blocks/flow_blocks';
import '../../all_blocks/calculation_blocks';
import '../../all_blocks/movement_blocks';
import '../../all_blocks/drawing_blocks';
import '../../all_blocks/function_blocks';

import React, {useState} from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';

import MissionOnNavbar from '../mission_do_navbar/mission_do_navbar';
import MissionOnPlayground from '../mission_do_playground/mission_do_playground';

const MissionOnMain = ({ formInfo, myBlocksInfo, onChangeJavascript, onChangeXml, onChangeSuccess, onChangeFail }) => {
  const { 
    initialXml, 
    startPosition,
    stepPosition,
    endPosition,
    title,
    difficulty,
    javascript, imageUrl,
  } = formInfo;
  const toolboxCategories = myBlocksInfo;

  const [activeDrags, setActiveDrags] = useState(0);
  const [modal, setModal] = useState(true);
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
      'toolboxBackgroundColour': '#C9CACA',
      'toolboxForegroundColour': '#FFFFFF',
      'flyoutBackgroundColour': '#EFEFEF',
      'flyoutForegroundColour': '#1e1e1e',
      'flyoutOpacity': '#1e1e1e',
      'scrollbarColour': '#EFEFEF',
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
    onChangeXml(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)))
    onChangeJavascript(Blockly.JavaScript.workspaceToCode(workspace))
  };

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  const onStop = () => {
    setActiveDrags(activeDrags - 1);
  };

  const statusModal = () => {
    setModal(!modal)
  };

  
  return (
    <section className={styles.page_style}>
      <MissionOnNavbar 
        modal={modal} 
        statusModal={statusModal} 
        title={title}
        difficulty={difficulty}
      />
      <div className={styles.container}>
        {modal && 
          <Draggable
            onStart={onStart}
            onStop={onStop}
            bounds="parent"
            >
            <div className={styles.playground}>
              <MissionOnPlayground 
                javascript_code={javascript}
                startPosition={startPosition}
                endPosition={endPosition}
                onChangeSuccess={onChangeSuccess}
                onChangeFail={onChangeFail}
                imageUrl={imageUrl}
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
                  colour: '#efefef',
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

export default MissionOnMain;