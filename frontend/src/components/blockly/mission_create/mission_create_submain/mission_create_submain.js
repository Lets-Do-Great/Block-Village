import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MissionCreateMain from '../mission_create_main/mission_create_main';
import MissionCreateModal from '../mission_create_modal/mission_create_modal';
import styles from './mission_create_submain.module.css';

const MissionCreateSubmain = ({ onChangeState, onSetMission }) => {
  const history = useHistory();

  const [TCmodal, setTCmodal] = useState(false);
  const [formInfo, setFormInfo] = useState({
    xmlCode: '<xml xmlns="https://developers.google.com/blockly/xml"></xml>',
    toolboxCategories: [
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
    ],
    javascriptCode: '',
    startPosition: [50, 50],
    stepPosition: [],
    endPosition: [50, 50],
    type: '미션 제작소',
    title: '',
    content: '',
    difficulty: 0,
  });	

  useEffect(() => {
    onChangeState(formInfo);
  }, [formInfo])

  const onChangeXml = (e) => {
    setFormInfo({
      ...formInfo,
      xmlCode: e,
    })
  };

  const onChangeStep = (e) => {
    setFormInfo({
      ...formInfo,
      stepPosition: e,
    })
    onChangeEnd(e)
  };

  const onChangeEnd = (move) => {
    let xx = formInfo.startPosition[0];
    let yy = formInfo.startPosition[1];
    for (let i = 0; i < move.length; i++) {
      const new_move_x = move[i][0]
      const new_move_y = move[i][1]
      xx = formInfo.startPosition[0] + (new_move_x * 60)
      yy = formInfo.startPosition[1] - (new_move_y * 60)
    }
    setFormInfo({
      ...formInfo,
      endPosition: [xx, yy],
    })
  }

  const onChangeModal = () => {
    setTCmodal(!TCmodal)
  };

  // 여기가 마지막에 미션제작 버튼 누르면 들어오는 함수임.
  const onChangeTC = () => {
    onSetMission();
  };

  const updateState = (event) => {
    setFormInfo(event)
  };

  return (
    <div className={styles.body}>
      {TCmodal && 
        <MissionCreateModal 
          formInfo={formInfo}
          onChangeModal={onChangeModal}
          title={formInfo.title}
          onChangeTC={onChangeTC}
          updateState={updateState}
        />
      }
      <MissionCreateMain 
        formInfo={formInfo}
        onChangeModal={onChangeModal}
        onChangeXml={onChangeXml}
        onChangeStep={onChangeStep}
        onChangeEnd={onChangeEnd}
      />
    </div>
  )
}

export default MissionCreateSubmain;