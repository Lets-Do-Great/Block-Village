import Blockly from 'blockly';
import 'blockly/javascript';

// 리스트 만드는 시작 버튼
Blockly.Blocks['start_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("시작하기 버튼을 클릭했을 때");
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('start-blocks');
  this.setTooltip("");
  this.setHelpUrl("");
  }
};

Blockly.JavaScript['start_button'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'var x = 0;\nvar y = 0;\nvar move = [];\nvar dir = 0;\nvar dir_info = [[0, 1], [0, -1], [-1, 0], [1, 0]];\n';
  return code;
};


// 리스트 후 log 출력 용
Blockly.Blocks['end_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("종료");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setStyle('start-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['end_button'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'console.log(move);\n';
  return code;
};

// 챌린지용 종료 버튼
Blockly.Blocks['challenge_end_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("종료");
    this.setPreviousStatement(true, null);
    this.setColour(0);
    this.setStyle('start-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['challenge_end_button'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'challenge_end()';
  return code;
};
