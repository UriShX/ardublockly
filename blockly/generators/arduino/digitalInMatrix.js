'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Arduino.digitalInMatrix');

goog.require('Blockly.Arduino');

Blockly.Arduino['btn_value'] = function(block) {
  var dropdown_cc_or_note = block.getFieldValue('cc_or_note');
  var dropdown_note_list = block.getFieldValue('note_list');
  // TODO: Assemble Arduino into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['digital_input_matrix'] = function(block) {
  var dropdown_protocol = block.getFieldValue('PROTOCOL');
  var value_protocol = Blockly.Arduino.valueToCode(block, 'PROTOCOL', Blockly.Arduino.ORDER_ATOMIC);
  var statements_btn_list = Blockly.Arduino.statementToCode(block, 'BTN_LIST');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['btn_definition'] = function(block) {
  var dropdown_btn_num = block.getFieldValue('BTN_NUM');
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_on_off = block.getFieldValue('ON_OFF');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};
