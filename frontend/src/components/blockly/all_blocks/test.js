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
      37{type: 'if_move'},
      38{type: 'if_else_move'},
      39{type: 'do_done'},
    ]
  },
  {
    name: '계산',
    colour: '#1060FF',
    blocks: [
      40{type: 'number'}, -- 0
      41{type: 'addition'}, -- 0
      42{type: 'subtraction'}, -- 0
      43{type: 'multiplication'},
      44{type: 'division'},
      45{type: 'random_num'},
      46{type: 'quotient'},
      47{type: 'remainder'},
      48{type: 'square'},
      49{type: 'sqrt'},
      50{type: 'integer'},
      51{type: 'roundup'},
      52{type: 'round'},
      53{type: 'abs_val'},
    ]
  },
  {
    name: '그리기',
    colour: '#7D10C4',
    blocks: [
      54{type: 'pen_down'},
      55{type: 'pen_up'},
      56{type: 'draw_line'},
      57{type: 'rotate_pen'},
      58{type: 'change_colour'},
    ]
  },
  {
    name: '함수',
    colour: '#CC6666',
    blocks: [
      59{type: 'variable'},
      60{type: 'set_variable'},
      61{type: 'change_variable'},        
    ]
  },
]


<xml xmlns="https://developers.google.com/blockly/xml"><block type="start_button" id="kj?K{^0mH$$q%:d.G.8V" x="10" y="50"><next><block type="move_forward_1" id="R8kvJaioN-z*YjS#;8%^"><next><block type="turn_right" id="E)]p(uyQ5OJD.n~B0BZ%"><next><block type="move_forward_1" id="$:Ya]@Y`h$U4jk(U%Y;;"><next><block type="end_button" id="MW`QoN%RN:lV|U!m{2zk"></block></next></block></next></block></next></block></next></block></xml>

var x = 0;
var y = 0;
var move = [];
var dir = 0;
var dir_info = [[0, 1], [0, -1], [-1, 0], [1, 0]];
move_forward(1);turn_right();move_forward(1);console.log(move);