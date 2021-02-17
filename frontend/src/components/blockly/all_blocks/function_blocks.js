import Blockly from 'blockly';
import 'blockly/javascript';


// 변수 객체
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("나의 변수");
    this.setOutput(true, "Number");
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['variable'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'my_var';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// set_variable
Blockly.Blocks['set_variable'] = {
  init: function() {
    this.appendValueInput("varKind")
    this.appendDummyInput()
        .appendField("를");
    this.appendValueInput("variable")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("으로 정하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['set_variable'] = function(block) {
  var value_varKind = Blockly.JavaScript.valueToCode(block, 'varKind', Blockly.JavaScript.ORDER_ATOMIC);
  var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_varKind} = ${value_variable};\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};


//change_variable
Blockly.Blocks['change_variable'] = {
  init: function() {
    this.appendValueInput("varKind")
    this.appendDummyInput()
        .appendField("를");
    this.appendValueInput("variable")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("만큼 증가시키기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['change_variable'] = function(block) {
  var value_varKind = Blockly.JavaScript.valueToCode(block, 'varKind', Blockly.JavaScript.ORDER_ATOMIC);
  var value_variable = Blockly.JavaScript.valueToCode(block, 'variable', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `${value_varKind} += ${value_variable};\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

//=========================================
Blockly.Blocks['variable1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("변수1");
    this.setOutput(true, "Number");
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['variable1'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'my_var1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['variable2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("변수2");
    this.setOutput(true, "Number");
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['variable2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'my_var2';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['variable3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("변수3");
    this.setOutput(true, "Number");
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['variable3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'my_var3';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.Blocks['inputVar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("입력값");
    this.setOutput(true, "Number");
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['inputVar'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'inputVar';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Blocks['outputVar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("출력값");
    this.setOutput(true, "Number");
    this.setColour(100);
    this.setStyle('function-blocks');
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['outputVar'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'outputVar';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
//=======================================================