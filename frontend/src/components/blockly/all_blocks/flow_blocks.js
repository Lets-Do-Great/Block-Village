import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';


Blockly.Blocks['repeat_times'] = {
  init: function() {
    this.appendValueInput("times")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("번 반복하기");
    this.appendStatementInput("repeat_times")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['repeat_times'] = function(block) {
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_repeat_times = Blockly.JavaScript.statementToCode(block, 'repeat_times');
  // TODO: Assemble JavaScript into code variable.
  // var code = `repeat_times_js(${value_times},"${statements_repeat_times}")`;
  var code = `for(var i=0; i<${value_times}; i++){\n ${statements_repeat_times};}\n`
  return code;
};
Blockly.Python['repeat_times'] = function(block) {
  var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var statements_repeat_times = Blockly.Python.statementToCode(block, 'repeat_times');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//while
Blockly.Blocks['repeat'] = {
  init: function() {
    this.appendStatementInput("repeat")
        .setCheck(null)
        .appendField("계속 반복하기");
    // this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['repeat'] = function(block) {
  var statements_repeat = Blockly.JavaScript.statementToCode(block, 'repeat');
  // TODO: Assemble JavaScript into code variable.
  // var code = `repeat_js("${statements_repeat}")`;
  var code = `while(true){\n ${statements_repeat}}\n`;
  return code;
};
Blockly.Python['repeat'] = function(block) {
  var statements_repeat = Blockly.Python.statementToCode(block, 'repeat');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


// while_not
Blockly.Blocks['while_not'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이 될때까지 반복");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['while_not'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = `while(!${value_condition}){\n ${statements_action};}\n`;
  return code;
}
Blockly.Python['while_not'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_action = Blockly.Python.statementToCode(block, 'action');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

//do while
Blockly.Blocks['do_while'] = {
  init: function() {
    this.appendValueInput("condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("인 동안 반복하기");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['do_while'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = `while(${value_condition}){\n ${statements_action};}\n`;
  return code;
};
Blockly.Python['do_while'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_action = Blockly.Python.statementToCode(block, 'action');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


// break
Blockly.Blocks['break'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("반복 중단하기");
    // this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'break;\n';
  return code;
};
Blockly.Python['break'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


//if
Blockly.Blocks['condition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("만일");
    this.appendValueInput("condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['condition'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(${value_condition}){\n${statements_action};}\n`;
  return code;
};
Blockly.Python['break'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_action = Blockly.Python.statementToCode(block, 'action');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


//if else
Blockly.Blocks['if_else'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("만일");
    this.appendValueInput("if")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("action1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니면");
    this.appendStatementInput("action2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_else'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action1 = Blockly.JavaScript.statementToCode(block, 'action1');
  var statements_action2 = Blockly.JavaScript.statementToCode(block, 'action2');
  // TODO: Assemble JavaScript into code variable.
  // var code = `if_else_js(${value_if},"${statements_action1}","${statements_action2}")`;
  var code = `if(${value_if}){\n${statements_action1};}\n else{\n${statements_action2}}\n`
  return code;
};


// if_else_double
Blockly.Blocks['if_else_double'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("만일");
    this.appendValueInput("if1")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("act1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니고");
    this.appendValueInput("if2")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("act2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니면");
    this.appendStatementInput("act3")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_else_double'] = function(block) {
  var value_if1 = Blockly.JavaScript.valueToCode(block, 'if1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_act1 = Blockly.JavaScript.statementToCode(block, 'act1');
  var value_if2 = Blockly.JavaScript.valueToCode(block, 'if2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_act2 = Blockly.JavaScript.statementToCode(block, 'act2');
  var statements_act3 = Blockly.JavaScript.statementToCode(block, 'act3');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(${value_if1}){\n${statements_act1};}\n else if(${value_if2}){\n${statements_act2}}\n else{\n${statements_act3}}\n`
  return code;
};


// if_else_triple
Blockly.Blocks['if_else_triple'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("만일");
    this.appendValueInput("if1")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("act1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니고");
    this.appendValueInput("if2")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("act2")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니고");
    this.appendValueInput("if3")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField("이라면");
    this.appendStatementInput("act3")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니면");
    this.appendStatementInput("act4")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_else_triple'] = function(block) {
  var value_if1 = Blockly.JavaScript.valueToCode(block, 'if1', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_act1 = Blockly.JavaScript.statementToCode(block, 'act1');
  var value_if2 = Blockly.JavaScript.valueToCode(block, 'if2', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_act2 = Blockly.JavaScript.statementToCode(block, 'act2');
  var value_if3 = Blockly.JavaScript.valueToCode(block, 'if3', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_act3 = Blockly.JavaScript.statementToCode(block, 'act3');
  var statements_act4 = Blockly.JavaScript.statementToCode(block, 'act4');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(${value_if1}){\n${statements_act1};}\n else if(${value_if2}){\n${statements_act2}}\n else if(${value_if3}){\n${statements_act3}}\n else{\n${statements_act4}}\n`
  return code;
};


// switch_input
Blockly.Blocks['switch_input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("입력값");
    this.appendValueInput("input")
        .setCheck(null);
    this.appendDummyInput();
    this.appendStatementInput("actions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['switch_input'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
  // TODO: Assemble JavaScript into code variable.
  var code = `switch(${value_input}){\n ${statements_actions}}\n`;
  return code;
};


// input_value
Blockly.Blocks['input_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("입력값이");
    this.appendValueInput("input")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("라면");
    this.appendStatementInput("actions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['input_value'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
  // TODO: Assemble JavaScript into code variable.
  var code = `case ${value_input}:${statements_actions}`;
  return code;
};

Blockly.Blocks['if_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["앞으로 갈 수 있다면","foward"], ["왼쪽으로 갈 수 있다면","left"], ["오른쪽으로 갈 수 있다면","right"]]), "opts");
    this.appendStatementInput("actions")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_move'] = function(block) {
  var dropdown_opts = block.getFieldValue('opts');
  var statements_actions = Blockly.JavaScript.statementToCode(block, 'actions');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(${dropdown_opts} === "forward"){\n 
    let tmp_x = x + Math.cos(cur_angle); \n
    let tmp_y = y + Math.sin(cur_angle); \n
    if(mission_map[tmp_x][tmp_y]){\n
      ${statements_actions}\n
    }\n
    if(${dropdown_opts} === "left"){\n
      let new_angle = cur_angle + 90 * Math.PI / 180;\n
      let tmp_x = x + Math.cos(new_angle);\n
      let tmp_y = y + Math.sin(new_angle);\n
      if(mission_map[tmp_x][tmp_y]){\n
        ${statements_actions}\n
      }\n
    }\n
    if(${dropdown_opts} === "right"){\n
      let new_angle = cur_angle - 90 * Math.PI / 180;\n
      let tmp_x = x + Math.cos(new_angle);\n
      let tmp_y = y + Math.sin(new_angle);\n
      if(mission_map[tmp_x][tmp_y]){\n
        ${statements_actions}\n
      }\n
    }\n
  }\n`;
  return code;
};


//만약 움직일수 있다면 그렇지 않다면
Blockly.Blocks['if_else_move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["앞으로 갈 수 있다면","foward"], ["왼쪽으로 갈 수 있다면","left"], ["오른쪽으로 갈 수 있다면","right"]]), "opts");
    this.appendStatementInput("actions1")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("아니라면");
    this.appendStatementInput("actions2")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_else_move'] = function(block) {
  var dropdown_opts = block.getFieldValue('opts');
  var statements_actions1 = Blockly.JavaScript.statementToCode(block, 'actions1');
  var statements_actions2 = Blockly.JavaScript.statementToCode(block, 'actions2');
  // TODO: Assemble JavaScript into code variable.
  var code = `if(${dropdown_opts} === "forward"){\n
    let tmp_x = x + Math.cos(cur_angle);\n
    let tmp_y = y + Math.sin(cur_angle);\n
    if(mission_map[tmp_x][tmp_y]){\n
      ${statements_actions1}\n
    }\n
    else{\n
      ${statements_actions2}\n
    }\n
  }\n
  if(${dropdown_opts} === "left"){\n
    let new_angle = cur_angle + 90 * Math.PI / 180;\n
    let tmp_x = x + Math.cos(new_angle);\n
    let tmp_y = y + Math.sin(new_angle);\n
    if(mission_map[tmp_x][tmp_y]){\n
      ${statements_actions1}\n
    }\n
    else{\n
      ${statements_actions2}\n
    }\n
  }\n
  if(${dropdown_opts} === "right"){\n
    let new_angle = cur_angle - 90 * Math.PI / 180;\n
    let tmp_x = x + Math.cos(new_angle);\n
    let tmp_y = y + Math.sin(new_angle);\n
    if(mission_map[tmp_x][tmp_y]){\n
      ${statements_actions1}\n
    }\n
    else{\n
      ${statements_actions2}\n
    }\n
  }\n`;
  return code;
};


// 목적지에 도달 할때 까지 반복
Blockly.Blocks['do_done'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("도착할때까지 반복하기");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setStyle('flow-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['do_done'] = function(block) {
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = `while(cur_location != answer_location){\n ${statements_action}\n}`;
  return code;
};
