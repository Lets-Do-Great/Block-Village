[
  {
    name: '시작',
    colour: '#C30D23',
    blocks: [
      1{type: 'start_button',},  -- 0 
      2{type: 'end_button',}, -- 0
    ],
  },
  {
    name: '판단',
    colour: '#FFA31D',
    blocks: [
      3{type: 'block_judgment_equals',}, -- 0
      4{type: 'block_judgment_strictinequality_left',}, -- 0
      5{type: 'block_judgment_strictinequality_right',}, -- 0
      6{type: 'block_judgment_notequal',},
      7{type: 'block_judgment_strictinequality_leftequal',},
      8{type: 'block_judgment_strictinequality_rightequal',},
      9{type: 'block_judgment_compare_and',},
      10{type: 'block_judgment_compare_or',},
      11{type: 'block_judgment_compare_not',},
    ],
  },
  {
    name: '움직임',
    colour: '#8FC31F',
    blocks: [
      12{type: 'move_forward_1'}, -- 0
      13{type: 'turn_right'}, -- 0
      14{type: 'turn_left'}, -- 0
      15{type: 'turn_back'},
      16{type: 'move_x',},
      17{type: 'move_y'},
      18{type: 'point_x'},
      19{type: 'point_y'},
      20{type: 'point_x_y'},
      21{type: 'turn_angle'},
      22{type: 'set_angle'},
      23{type: 'set_angle_move'},
      24{type: 'move_forward'},
    ],
  },
  {
    name: '흐름',
    colour: '#55CFFF',
    blocks: [
      25{type: 'input',}, -- 0
      26{type: 'repeat_times'},
      27{type: 'repeat'},
      28{type: 'do_while'},
      29{type: 'while_not'},
      30{type: 'break'},
      31{type: 'condition'},
      32{type: 'if_else'},
      33{type: 'if_else_double'},
      34{type: 'if_else_triple'},
      35{type: 'switch_input'},
      36{type: 'input_value'},
    ]
  },
  {
    name: '계산',
    colour: '#1060FF',
    blocks: [
      37{type: 'number'}, -- 0
      38{type: 'addition'}, -- 0
      39{type: 'subtraction'}, -- 0
      40{type: 'multiplication'},
      41{type: 'division'},
      42{type: 'random_num'},
      43{type: 'quotient'},
      44{type: 'remainder'},
      45{type: 'square'},
      46{type: 'sqrt'},
      47{type: 'integer'},
      48{type: 'roundup'},
      49{type: 'round'},
      50{type: 'abs_val'},
    ]
  },
  {
    name: '그리기',
    colour: '#7D10C4',
    blocks: [
      51{type: 'pen_down'},
      52{type: 'pen_up'},
      53{type: 'draw_line'},
      54{type: 'rotate_pen'},
      55{type: 'change_colour'},
    ]
  },
  {
    name: '함수',
    colour: '#CC6666',
    blocks: [
      56{type: 'variable'},
      57{type: 'set_variable'},
      58{type: 'change_variable'},        
    ]
  },
]

