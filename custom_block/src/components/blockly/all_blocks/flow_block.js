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
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['repeat_times'] = function(block) {
  var value_times = Blockly.JavaScript.valueToCode(block, 'times', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_repeat_times = Blockly.JavaScript.statementToCode(block, 'repeat_times');
  // TODO: Assemble JavaScript into code variable.
  var code = `repeat_times_js(${value_times},"${statements_repeat_times}")`;
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
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['repeat'] = function(block) {
  var statements_repeat = Blockly.JavaScript.statementToCode(block, 'repeat');
  // TODO: Assemble JavaScript into code variable.
  var code = `repeat_js("${statements_repeat}")`;
  return code;
};
Blockly.Python['repeat'] = function(block) {
  var statements_repeat = Blockly.Python.statementToCode(block, 'repeat');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};


//do while
Blockly.Blocks['repeat_condition'] = {
  init: function() {
    this.appendValueInput("repeat_condition")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["이 될 때까지",'1'], ["인 동안",'2']]), "opts")
        .appendField("반복하기");
    this.appendStatementInput("action")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['repeat_condition'] = function(block) {
  var value_repeat_condition = Blockly.JavaScript.valueToCode(block, 'repeat_condition', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_opts = block.getFieldValue('opts');
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = `repeat_condition_js(${value_repeat_condition},${dropdown_opts},"${statements_action}")`;
  return code;
};
Blockly.Python['repeat_condition'] = function(block) {
  var value_repeat_condition = Blockly.Python.valueToCode(block, 'repeat_condition', Blockly.Python.ORDER_ATOMIC);
  var dropdown_opts = block.getFieldValue('opts');
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
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'break_js()';
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
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['condition'] = function(block) {
  var value_condition = Blockly.JavaScript.valueToCode(block, 'condition', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action = Blockly.JavaScript.statementToCode(block, 'action');
  // TODO: Assemble JavaScript into code variable.
  var code = `condition_js(${value_condition},"${statements_action}")`;
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
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['if_else'] = function(block) {
  var value_if = Blockly.JavaScript.valueToCode(block, 'if', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_action1 = Blockly.JavaScript.statementToCode(block, 'action1');
  var statements_action2 = Blockly.JavaScript.statementToCode(block, 'action2');
  // TODO: Assemble JavaScript into code variable.
  var code = `if_else_js(${value_if},"${statements_action1}","${statements_action2}")`;
  return code;
};
Blockly.Python['break'] = function(block) {
  var value_condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var statements_action1 = Blockly.Python.statementToCode(block, 'action1');
  var statements_action2 = Blockly.Python.statementToCode(block, 'action2');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};