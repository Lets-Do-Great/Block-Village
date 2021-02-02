import styles from "./mission_maze.module.css";

import Draggable from 'react-draggable';

import '../all_blocks/start_blocks';
import '../all_blocks/judgement_blocks';
import '../all_blocks/flow_blocks';
import '../all_blocks/calculation_blocks';
import '../all_blocks/movement_blocks';
import '../all_blocks/drawing_blocks';
import '../all_blocks/function_blocks';

import React, {useState} from 'react';
import ReactBlockly from 'react-blockly';
import Blockly from 'blockly';

import PlayGround from '../play_ground/play_ground';
import BlocklyNavbar from '../blockly_navbar/blockly_navbar';


export default function MissionMaze() {
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

  const [initialXml, setInitialXml] = useState(
    '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>'
  );
  const [toolboxCategories, setToolboxCategories] = useState([
    {
      name: '시작',
      colour: '#C30D23',
      blocks: [
        {type: 'start_button',},
        {type: 'end_button',},
      ],
    },
    {
      name: '판단',
      colour: '#FFA31D',
      blocks: [
        {type: 'input',},
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
      name: '움직임',
      colour: '#8FC31F',
      blocks: [
        {type: 'move_x',},
        {type: 'move_y'},
        {type: 'point_x'},
        {type: 'point_y'},
        {type: 'point_x_y'},
        {type: 'turn_angle'},
        {type: 'set_angle'},
        {type: 'set_angle_move'},
        {type: 'move_forward'},
        {type: 'move_forward_1'},
      ],
    },
    {
      name: '흐름',
      colour: '#55CFFF',
      blocks: [
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
      name: '그리기',
      colour: '#7D10C4',
      blocks: [
        {type: 'pen_down'},
        {type: 'pen_up'},
        {type: 'draw_line'},
        {type: 'rotate_pen'},
        {type: 'change_colour'},
      ]
    },
    {
      name: '함수',
      colour: '#CC6666',
      blocks: [
        {type: 'variable'},
        {type: 'set_variable'},
        {type: 'change_variable'},        
      ]
    },
  ])


  function workspaceDidChange(workspace) {
    // save 형태
    setInitialXml(Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)))
    // document.getElementById('generated-xml').innerText = newXml;

    // playground 형태로 예상 중
    setJavascript(Blockly.JavaScript.workspaceToCode(workspace))
    console.log(javascript);
    // document.getElementById('code').value = code;
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

  return (
    <section className={styles.page_style}>
      <BlocklyNavbar modal={modal} statusModal={statusModal} />
      <div className={styles.container}>
        {modal && 
          <Draggable
            onStart={onStart}
            onStop={onStop}
            bounds="parent"
            >
            <div className={styles.playground}>
              <PlayGround 
                javascript_code={javascript} />
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
}
