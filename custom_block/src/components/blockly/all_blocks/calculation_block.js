import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';


Blockly.Blocks['addition'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("+");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['addition'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'addition_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['addition'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// 뺄셈
Blockly.Blocks['subtraction'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("-");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['subtraction'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'subtraction_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['subtraction'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



// 곱셈
Blockly.Blocks['multiplication'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("X");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['multiplication'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'multiplication_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['multiplication'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};



// 나눗셈
Blockly.Blocks['division'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['division'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'division_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['division'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// 랜덤 숫자
Blockly.Blocks['random_num'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("부터");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("사이의 무작위 수");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['random_num'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'random_num_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['random_num'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


// 몫
Blockly.Blocks['quotient'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("의 몫");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['quotient'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'quotient_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['quotient'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


//나머지
Blockly.Blocks['remainder'] = {
  init: function() {
    this.appendValueInput("num1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("/");
    this.appendValueInput("num2")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("의 나머지");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(4);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['remainder'] = function(block) {
  var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'remainder_js('+ value_num1 + ',' + value_num2 + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.Python['remainder'] = function(block) {
  var value_num1 = Blockly.Python.valueToCode(block, 'num1', Blockly.Python.ORDER_ATOMIC);
  var value_num2 = Blockly.Python.valueToCode(block, 'num2', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};