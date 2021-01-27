import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';


// if 블럭
/////////////////////////////////////////////////////////////////////////////////////////////
Blockly.Blocks['block_judgment_equals'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput('10'), 'e1')
      .appendField('=')
      .appendField(new Blockly.FieldTextInput('10'), 'e2');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip('두 수를 비교합니다. 두 값이 같을 경우 참을 반환합니다.');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_strictinequality_left'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput('10'), 'e1')
      .appendField('>')
      .appendField(new Blockly.FieldTextInput('10'), 'e2');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip(
      "두 수를 비교합니다. 왼쪽의 값 'e1'이 클 경우 참을 반환힙니다."
    );
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_strictinequality_right'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput('10'), 'e1')
      .appendField('<')
      .appendField(new Blockly.FieldTextInput('10'), 'e2');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip(
      "두 수를 비교합니다. 오른쪽의 값 'e2'이 클 경우 참을 반환합니다."
    );
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_notequal'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput('10'), 'e1')
      .appendField('!=')
      .appendField(new Blockly.FieldTextInput('10'), 'e2');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip('두 수를 비교합니다. 두 값이 다를경우 참을 반환합니다.');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_strictinequality_leftequal'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput('10'), 'e1')
      .appendField('≥')
      .appendField(new Blockly.FieldTextInput('10'), 'e2');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip(
      '두 수를 비교합니다. 왼쪽의 수가 오른쪽의 수와 같거나 클 경우 참을 반환합니다.'
    );
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_strictinequality_rightequal'] = {
  init: function () {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(new Blockly.FieldTextInput('10'), 'e1')
      .appendField('≤')
      .appendField(new Blockly.FieldTextInput('10'), 'e2');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip(
      '두 수를 비교합니다. 오른쪽의 수가 왼쪽의 수와 같거나 클 경우 참을 반환합니다.'
    );
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_compare_and'] = {
  init: function () {
    this.appendValueInput('b1').setCheck('Boolean');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(
        new Blockly.FieldDropdown([
          ['그리고', '1'],
          ['또는', '2'],
        ]),
        'NAME'
      );
    this.appendValueInput('b2')
      .setCheck('Boolean')
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip('두 관계가 모두 참 일경우 참 을 반환합니다.');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_compare_or'] = {
  init: function () {
    this.appendValueInput('b1').setCheck('Boolean');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_CENTRE)
      .appendField(
        new Blockly.FieldDropdown([
          ['또는', '2'],
          ['그리고', '1'],
        ]),
        'NAME'
      );
    this.appendValueInput('b2')
      .setCheck('Boolean')
      .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip('두 관계 중 하나라도 참 일경우 참 을 반환합니다.');
    this.setHelpUrl('');
  },
};
Blockly.Blocks['block_judgment_compare_not'] = {
  init: function () {
    this.appendValueInput('boolean').setCheck('Boolean');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('이 아니다.');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(25);
    this.setTooltip('두 관계가 아닐 경우 참을 반환합니다.');
    this.setHelpUrl('');
  },
};

/////////////////////////////////////////////////////////////////////////////

Blockly.JavaScript['block_judgment_equals'] = function (block) {
  var text_e1 = block.getFieldValue('e1');
  var text_e2 = block.getFieldValue('e2');
  // TODO: 두 수를 비교합니다. 조건식에 만족하는 경우 true를 반환합니다.
  var code = `block_judgment_equals(${text_e1},${text_e2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_strictinequality_left'] = function (block) {
  var text_e1 = block.getFieldValue('e1');
  var text_e2 = block.getFieldValue('e2');
  // TODO: 두 수를 비교합니다. 왼쪽 수 'e1'이 클 경우 true를 반환힙니다.
  var code =
    `block_judgment_strictinequality_left(${text_e1},${text_e2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_strictinequality_right'] = function (block) {
  var text_e1 = block.getFieldValue('e1');
  var text_e2 = block.getFieldValue('e2');
  // TODO: 두 수를 비교합니다. 두 값이 다를경우 true를 반환합니다.
  var code =
    `block_judgment_strictinequality_right(${text_e1},${text_e2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_notequal'] = function (block) {
  var text_e1 = block.getFieldValue('e1');
  var text_e2 = block.getFieldValue('e2');
  // TODO: 두 수를 비교합니다. 왼쪽의 값 'e1'이 클 경우 true를 반환힙니다.
  var code = `block_judgment_notequal(${text_e1},${text_e2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_strictinequality_leftequal'] = function (
  block
) {
  var text_e1 = block.getFieldValue('e1');
  var text_e2 = block.getFieldValue('e2');
  // TODO: 두 수를 비교합니다. 왼쪽의 수가 오른쪽의 수와 같거나 클 경우 true를 반환합니다.
  var code =
    `block_judgment_strictinequality_leftequal(${text_e1},${text_e2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_strictinequality_rightequal'] = function (
  block
) {
  var text_e1 = block.getFieldValue('e1');
  var text_e2 = block.getFieldValue('e2');
  // TODO: 두 수를 비교합니다. 오른쪽의 수가 왼쪽의 수와 같거나 클 경우 true를 반환합니다.
  var code = `block_judgment_equals(${text_e1},${text_e2})`;
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_compare_and'] = function (block) {
  var value_b1 = Blockly.JavaScript.valueToCode(
    block,
    'b1',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_name = block.getFieldValue('NAME');
  var value_b2 = Blockly.JavaScript.valueToCode(
    block,
    'b2',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  console.log(dropdown_name);
  // TODO: 두 관계가 모두 참 일경우 참 을 반환합니다.
  var code =
    `block_judgment_compare_and(${value_b1},${dropdown_name},${value_b2})`;
  console.log('make_code : ' + code);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['block_judgment_compare_or'] = function (block) {
  var value_b1 = Blockly.JavaScript.valueToCode(
    block,
    'b1',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var dropdown_name = block.getFieldValue('NAME');
  var value_b2 = Blockly.JavaScript.valueToCode(
    block,
    'b2',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: 두 관계 중 하나라도 참 일경우 참 을 반환합니다.
  var code =
    `block_judgment_compare_or(${value_b1},${dropdown_name},${value_b2})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['block_judgment_compare_not'] = function (block) {
  var value_boolean = Blockly.JavaScript.valueToCode(
    block,
    'boolean',
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: 두 관계가 아닐 경우 참을 반환합니다.
  // TODO: value_boolean가 true,false로 옵니다.
  var code = `block_judgment_compare_not(${value_boolean})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};