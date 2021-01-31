import Blockly from 'blockly';
import 'blockly/javascript';


// 펜 내리기
Blockly.Blocks['pen_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("펜 내리기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['pen_down'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pen_down()';
  return code;
};


// 펜 올리기
Blockly.Blocks['pen_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("펜 올리기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['pen_up'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'pen_up()';
  return code;
};


// 선 그리기
Blockly.Blocks['draw_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "length")
        .appendField("만큼 앞으로 이동하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['draw_line'] = function(block) {
  var text_length = block.getFieldValue('length');
  // TODO: Assemble JavaScript into code variable.
  var code = `draw_line(${text_length})`;
  return code;
};


// 펜 회전
Blockly.Blocks['rotate_pen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle")
        .appendField("만큼 펜을 회전하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['rotate_pen'] = function(block) {
  var angle_angle = block.getFieldValue('angle');
  // TODO: Assemble JavaScript into code variable.
  var code = `rotate_pen(${angle_angle})`;
  return code;
};

//change_colour
Blockly.Blocks['change_colour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("색을")
        .appendField(new Blockly.FieldColour("#ff0000"), "colour")
        .appendField("로 바꾸기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['change_colour'] = function(block) {
  var colour_colour = block.getFieldValue('colour');
  // TODO: Assemble JavaScript into code variable.
  var code = `change_colour(${colour_colour})`;
  return code;
};