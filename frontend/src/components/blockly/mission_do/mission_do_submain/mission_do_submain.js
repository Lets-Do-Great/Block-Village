import React, { useState } from 'react';
import MissionDoMain from '../mission_do_main/mission_do_main';
import MissionDoModalSuccess from '../mission_do_modal/mission_do_modal_success/mission_do_modal_success';
import MissionDoModalFail from '../mission_do_modal/mission_do_modal_fail/mission_do_modal_fail';
import styles from './mission_do_submain.module.css';

const MissionDoSubmain = ({ setUseDifficulty, onChangeTodo, onSetTodoMission, onSetDifficultyMission }) => {
  const [successModal, setSuccessModal] = useState(false);
  const [failModal, setFailModal] = useState(false);

  const [formInfo, setFormInfo] = useState({
    initialXml: '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>',
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
    startPosition: [50, 50],
    stepPosition: [],
    endPosition: [170, 90],
    title: '미션1',
    content: 'asfsafs',
    difficulty: 0,
  });

  const onChangeXml = (e) => {
    setFormInfo({
      ...formInfo,
      initialXml: e,
    });
  };

  const onChangeSuccess = () => {
    onChangeTodo();
    setSuccessModal(!successModal);
  };

  const onChangeFail = () => {
    setFailModal(!failModal);
  };

  const onSubmitDifficulty = () => {
    onSetTodoMission();
    onSetDifficultyMission();
  };

  return (
    <div className={styles.body}>
      {successModal && 
        <MissionDoModalSuccess 
        onSubmitDifficulty={onSubmitDifficulty}
          setUseDifficulty={setUseDifficulty}
        />
      }
      {failModal && 
        <MissionDoModalFail
          onChangeFail={onChangeFail}
        />
      }
      <MissionDoMain 
        formInfo={formInfo}
        onChangeXml={onChangeXml}
        onChangeSuccess={onChangeSuccess}
        onChangeFail={onChangeFail}
      />
    </div>
  )
}

export default MissionDoSubmain;