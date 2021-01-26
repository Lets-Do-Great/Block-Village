import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';

/* 움직임 블록 */

// x 좌표 [ ] 만큼 이동
Blockly.Blocks['move_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("x좌표")
          .appendField(new Blockly.FieldTextInput("10"), "x_distance")
          .appendField("만큼 이동");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    }
  };
  
  Blockly.JavaScript['move_x'] = function(block) {
    var x_distance = block.getFieldValue('x_distance');
    var code = 'move_x('+x_distance+'); ';
    return code;
  };
  
  Blockly.Python['move_x'] = function(block) {
    var x_distance = block.getFieldValue('x_distance');
    var code = '...\n';
    return code;
  };
  
  // y 좌표 [ ] 만큼 이동
  Blockly.Blocks['move_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("y좌표")
          .appendField(new Blockly.FieldTextInput("10"), "y_distance")
          .appendField("만큼 이동");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    }
  };
  
  Blockly.JavaScript['move_y'] = function(block) {
    var y_distance = block.getFieldValue('y_distance');
    var code = 'move_y('+y_distance+'); ';
    return code;
  };
  
  Blockly.Python['move_y'] = function(block) {
    var y_distance = block.getFieldValue('y_distance');
    var code = '...\n';
    return code;
  };
  
  // x 좌표를 [ ] 위치로 이동
  Blockly.Blocks['point_x'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("x좌표를")
          .appendField(new Blockly.FieldTextInput("10"), "x_point")
          .appendField("으로 이동");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    }
  };
  
  Blockly.JavaScript['point_x'] = function(block) {
    var x_point = block.getFieldValue('x_point');
    var code = 'point_x('+x_point+'); ';
    return code;
  };
  
  Blockly.Python['point_x'] = function(block) {
    var x_point = block.getFieldValue('x_point');
    var code = '...\n';
    return code;
  };
  
  // y 좌표를 [ ]  위치로 이동
  Blockly.Blocks['point_y'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("y좌표를")
          .appendField(new Blockly.FieldTextInput("10"), "y_point")
          .appendField("으로 이동");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    }
  };
  
  Blockly.JavaScript['point_y'] = function(block) {
    var y_point = block.getFieldValue('y_point');
    var code = 'point_y('+y_point+'); ';
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
          .appendField("x좌표를")
          .appendField(new Blockly.FieldTextInput("10"), "x_point")
          .appendField("y좌표를")
          .appendField(new Blockly.FieldTextInput("10"), "y_point")
          .appendField("(으)로 이동");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(290);
    }
  };
  
  Blockly.JavaScript['point_x_y'] = function(block) {
    var x_point = block.getFieldValue('x_point');
    var y_point = block.getFieldValue('y_point');
    var code = 'point_x_y('+x_point+','+y_point+');';
    return code;
  };
  
  Blockly.Python['point_x_y'] = function(block) {
    var x_point = block.getFieldValue('x_point');
    var y_point = block.getFieldValue('y_point');
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
    }
  };
  
  Blockly.JavaScript['turn_angle'] = function(block) {
    var angle = block.getFieldValue('angle');
    var code = 'turn_angle('+angle+');';
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
    }
  };
  
  Blockly.JavaScript['set_angle'] = function(block) {
    var angle = block.getFieldValue('angle');
    var code = 'set_angle('+angle+');';
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
    }
  };
  
  Blockly.JavaScript['set_angle_move'] = function(block) {
    var angle = block.getFieldValue('angle');
    var distance = block.getFieldValue('distance');
    var code = '...\n'; // 각도 설정 방법이 정해진 후 작성 예정 :)
    return code;
  };
  
  Blockly.Python['set_angle_move'] = function(block) {
    var angle = block.getFieldValue('angle');
    var distance = block.getFieldValue('distance');
    var code = '...\n';
    return code;
  };