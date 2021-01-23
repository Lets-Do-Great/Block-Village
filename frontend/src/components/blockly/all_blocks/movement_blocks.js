import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';

Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("앞으로 가기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_forward'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'x = x + (dir_info[dir][0] * 100);\ny = y + (dir_info[dir][1] * 100);\nmove.push([x, y]);\n';
  return code;
};

Blockly.Python['move_forward'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};



Blockly.Blocks['move_turnright'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("오른쪽으로 돌기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_turnright'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dir = (dir + 1) % 4;\n';
  return code;
};

Blockly.Python['move_turnright'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};



Blockly.Blocks['move_turnleft'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("왼쪽으로 돌기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_turnleft'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'dir = (dir + 3) % 4;\n';
  return code;
};

Blockly.Python['move_turnleft'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};