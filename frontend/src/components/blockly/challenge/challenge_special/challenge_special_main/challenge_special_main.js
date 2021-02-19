import styles from './challenge_special_main.module.css';

import Draggable from 'react-draggable';

import '../../../all_blocks/start_blocks';
import '../../../all_blocks/judgement_blocks';
import '../../../all_blocks/flow_blocks';
import '../../../all_blocks/calculation_blocks';
import '../../../all_blocks/movement_blocks';
import '../../../all_blocks/drawing_blocks';
import '../../../all_blocks/function_blocks';

import React, {useState} from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';

import MissionDoNavbar from '../../../mission_do/mission_do_navbar/mission_do_navbar';
import ChallengeSpecialPlayground from '../challenge_special_playground/challenge_special_playground';

const ChallengeSpecialMain = ({ formInfo, onChangeJavascript, onChangeXml, onChangeSuccess, onChangeFail }) => {
  const { 
    initialXml, 
    title,
    difficulty,
    javascript,
  } = formInfo;
  const toolboxCategories = [
    {
      name: '시작',
      colour: '#C30D23',
      blocks: [
        {type: 'start_button',},
        {type: 'challenge_end_button',},
      ],
    },
    {
      name: '판단',
      colour: '#FFA31D',
      blocks: [
        {type: 'block_judgment_equals',},
        {type: 'block_judgment_strictinequality_left',},
        {type: 'block_judgment_strictinequality_right',},
        {type: 'block_judgment_notequal',},
        {type: 'block_judgment_strictinequality_leftequal',},
        {type: 'block_judgment_strictinequality_rightequal',},
        {type: 'block_judgment_compare_and',},
        {type: 'block_judgment_compare_or',},
        {type: 'block_judgment_compare_not',},
      ],
    },
    {
      name: '흐름',
      colour: '#55CFFF',
      blocks: [
        {type: 'input',},
        {type: 'repeat_times'},
        {type: 'repeat'},
        {type: 'do_while'},
        {type: 'while_not'},
        {type: 'break'},
        {type: 'condition'},
        {type: 'if_else'},
        {type: 'if_else_double'},
        {type: 'if_else_triple'},
        {type: 'switch_input'},
        {type: 'input_value'},
        {type: 'if_move'},
        {type: 'if_else_move'},
        {type: 'do_done'},
      ]
    },
    {
      name: '계산',
      colour: '#1060FF',
      blocks: [
        {type: 'number'},
        {type: 'addition'},
        {type: 'subtraction'},
        {type: 'multiplication'},
        {type: 'division'},
        {type: 'random_num'},
        {type: 'quotient'},
        {type: 'remainder'},
        {type: 'square'},
        {type: 'sqrt'},
        {type: 'integer'},
        {type: 'roundup'},
        {type: 'round'},
        {type: 'abs_val'},
      ]
    },
    {
      name: '함수',
      colour: '#CC6666',
      blocks: [
        {type: 'variable1'},
        {type: 'variable2'},
        {type: 'variable3'},
        {type: 'inputVar'},
        {type: 'outputVar'},
        {type: 'set_variable'},
        {type: 'change_variable'},
      ]
    },
  ];

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
      <MissionDoNavbar 
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
              <ChallengeSpecialPlayground 
                javascript_code={javascript}
                onChangeSuccess={onChangeSuccess}
                onChangeFail={onChangeFail}
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

export default ChallengeSpecialMain;