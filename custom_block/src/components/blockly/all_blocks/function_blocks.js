import Blockly from 'blockly';
import 'blockly/javascript';


// 변수 객체
Blockly.Blocks['variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("나의 변수");
    this.setOutput(true, "Number");
    this.setColour(100);
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
    this.appendDummyInput()
        .appendField("나의 변수를")
        .appendField(new Blockly.FieldTextInput("0"), "variable")
        .appendField("으로 정하기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['set_variable'] = function(block) {
  var text_variable = block.getFieldValue('variable');
  // TODO: Assemble JavaScript into code variable.
  var code = `set_var(${text_variable})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


//change_variable
Blockly.Blocks['change_variable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("나의 변수를")
        .appendField(new Blockly.FieldTextInput("0"), "variable")
        .appendField("만큼 바꾸기");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['change_variable'] = function(block) {
  var text_variable = block.getFieldValue('variable');
  // TODO: Assemble JavaScript into code variable.
  var code = `change_var(${text_variable})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};