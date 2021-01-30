import Blockly from 'blockly';
import 'blockly/javascript';

/* 움직임 블록 */

// x 좌표 [ ] 만큼 이동
Blockly.Blocks['move_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x좌표");
    this.appendValueInput("x_distance")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("만큼 이동");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['move_x'] = function(block) {
  var value_x_distance = Blockly.JavaScript.valueToCode(block, 'x_distance', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `move_x(${value_x_distance});`;
  return code;
};
Blockly.Python['move_x'] = function(block) {
  var value_x_distance = Blockly.Python.valueToCode(block, 'x_distance', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
  
// y 좌표 [ ] 만큼 이동
Blockly.Blocks['move_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("y좌표");
    this.appendValueInput("y_distance")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("만큼 이동");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_y'] = function(block) {
  var value_y_distance = Blockly.JavaScript.valueToCode(block, 'y_distance', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `move_y(${value_y_distance});`;
  return code;
};
Blockly.Python['move_y'] = function(block) {
  var value_y_distance = Blockly.Python.valueToCode(block, 'y_distance', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
  
// x 좌표를 [ ] 위치로 이동
Blockly.Blocks['point_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x좌표를");
    this.appendValueInput("x_point")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("으로 이동");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['point_x'] = function(block) {
  var value_x_point = Blockly.JavaScript.valueToCode(block, 'x_point', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `point_x(${value_x_point});`;
  return code;
};
Blockly.Python['point_x'] = function(block) {
  var value_x_point = Blockly.Python.valueToCode(block, 'x_point', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
  
// y 좌표를 [ ]  위치로 이동
Blockly.Blocks['point_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("y좌표를");
    this.appendValueInput("y_point")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("으로 이동");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['point_y'] = function(block) {
  var value_y_point = Blockly.JavaScript.valueToCode(block, 'y_point', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `point_y(${value_y_point});`;
  return code;
};
  
  Blockly.Python['point_y'] = function(block) {
    var y_point = block.getFieldValue('y_point');
    var code = '...\n';
    return code;
  };
  
// x 좌표를 [ ] 위치, y 좌표를 [] 위치로 이동
Blockly.Blocks['point_x_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("x좌표를");
    this.appendValueInput("x_point")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("y좌표를");
    this.appendValueInput("y_point")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("으로 이동");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['point_x_y'] = function(block) {
  var value_x_point = Blockly.JavaScript.valueToCode(block, 'x_point', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y_point = Blockly.JavaScript.valueToCode(block, 'y_point', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `point_x_y(${value_x_point},${value_y_point});`;
  return code;
};  
Blockly.Python['point_x_y'] = function(block) {
  var value_x_point = Blockly.Python.valueToCode(block, 'x_point', Blockly.Python.ORDER_ATOMIC);
  var value_y_point = Blockly.Python.valueToCode(block, 'y_point', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};
  
/* 방향(각도) 블록 */

// 각도 Custom - 방향을 [ ]도 만큼 회전하기
Blockly.Blocks['turn_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("방향을")
        .appendField(new Blockly.FieldAngle(90), "angle")
        .appendField("만큼 회전하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
  }
};

Blockly.JavaScript['turn_angle'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = `turn_angle(${angle});`;
  return code;
};

Blockly.Python['turn_angle'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = '...\n';
  return code;
};

// 각도 Custom -방향을 [ ]도로 정하기
Blockly.Blocks['set_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("방향을")
        .appendField(new Blockly.FieldAngle(90), "angle")
        .appendField("로 정하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
  }
};

Blockly.JavaScript['set_angle'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = `set_angle(${angle});`;
  return code;
};

Blockly.Python['set_angle'] = function(block) {
  var angle = block.getFieldValue('angle');
  var code = '...\n';
  return code;
};

// 각도 Custom - [ ]도 방향으로 [ ]만큼 이동하기
Blockly.Blocks['set_angle_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle")
        .appendField("방향으로")
        .appendField(new Blockly.FieldTextInput("10"), "distance")
        .appendField("만큼 이동하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
  }
};

Blockly.JavaScript['set_angle_move'] = function(block) {
  var angle = block.getFieldValue('angle');
  var distance = block.getFieldValue('distance');
  var code = `set_angle_move(${angle}, ${distance})`;
  return code;
};

Blockly.Python['set_angle_move'] = function(block) {
  var angle = block.getFieldValue('angle');
  var distance = block.getFieldValue('distance');
  var code = '...\n';
  return code;
};


// 앞으로 distance 만큼 이동
Blockly.Blocks['move_forward'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("0"), "distance")
        .appendField("만큼 앞으로 이동");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setStyle('movement-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['move_forward'] = function(block) {
  var text_distance = block.getFieldValue('distance');
  // TODO: Assemble JavaScript into code variable.
  var code = `move_forward(${text_distance})`;
  return code;
};