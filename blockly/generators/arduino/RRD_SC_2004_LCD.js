'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Arduino.RRD_SC_2004_LCD');

goog.require('Blockly.Arduino');
Blockly.Arduino['smartcontrol_lcd'] = function(block) {
var code = '';
  var dropdown_protocol = block.getFieldValue('protocol');
  var value_define_protocol = Blockly.Arduino.valueToCode(this, 'DEFINE_PROTOCOL', Blockly.Arduino.ORDER_ATOMIC);
  //alert(value_define_protocol.length);
  var dropdown_controlpins = block.getFieldValue('controlPins');
  var value_define_controlpins = Blockly.Arduino.valueToCode(this, 'DEFINE_CONTROL_PINS', Blockly.Arduino.ORDER_ATOMIC);
  var statements_splash = Blockly.Arduino.statementToCode(block, 'Splash');
  var statements_menu = Blockly.Arduino.statementToCode(block, 'Menu');
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['define_LCD'] = '#include "MIDI_UI_LiquidCrystal.h"\n';
  Blockly.Arduino.definitions_['_define_LCD_ctl'] = value_define_controlpins+'\n';
  //alert(Blockly.Arduino.definitions_['_define_LCD_ctl']);
  Blockly.Arduino.definitions_['_define_LCD_protocol'] = 'MIDI_UI_LiquidCrystal lcd'+value_define_protocol+';\n';
  //if (dropdown_protocol === "SPI2Defs") {
    //}
  Blockly.Arduino.setups_['start_lcd_'] = 'lcd.begin(20, 4);\n';
  if (dropdown_controlpins === "ENC") {
    Blockly.Arduino.definitions_['define_ENC'] = '#include <PinChangeInt.h>\n';
    Blockly.Arduino.definitions_['encoder_register'] = '#define ENC_RD  PINC  //encoder port read, for a2-a3\n';
    Blockly.Arduino.definitions_['encoder_vars'] = "volatile int8_t counter = 0;\n"+
    "static int8_t oldCounter = 0;\n"+
    "static uint8_t old_AB = 3;  //lookup table index\n"+
    "static int8_t encval = 0;   //encoder value\n"+
    "static const int8_t enc_states [] PROGMEM = {0, -1, 1, 0, 1, 0, 0, -1, -1, 0, 0, 1, 0, 1, -1, 0}; //encoder lookup table\n";

    //Blockly.Arduino.definitions_['just_this'] =     "uint8_t test = 0;\n";
    Blockly.Arduino.definitions_['pin_change_isr'] = "void encoderFunc()\n"+
    "{\n"+
    "  old_AB <<= 2; //remember previous state\n"+
    "  old_AB |= ( (ENC_RD>>2) & 0x03 );\n"+
    "  encval += pgm_read_byte(&(enc_states[( old_AB & 0x0f )]));\n"+
    "  // post Navigation forward/reverse event \n"+
    "  if ( encval > 3 ) { //four steps forward\n"+
    "//    Serial.print(1);\n"+
    "//    Menu._key = 1;\n"+
    "    counter++;\n"+
    "    encval = 0;\n"+
    "  }\n"+
    "  encval += pgm_read_byte(&(enc_states[( old_AB & 0x0f )]));\n"+
    "  // post Navigation forward/reverse event \n"+
    "  if ( encval > 3 ) { //four steps forward\n"+
    "//    Serial.print(1);\n"+
    "//    Menu._key = 1;\n"+
    "    counter++;\n"+
    "    encval = 0;\n"+
    "  }\n"+
    "  else if ( encval < -3 ) { //four steps backwards\n"+
    "//    Serial.print(-1);\n"+
    "//    Menu._key = -1;\n"+
    "    counter--;\n"+
    "    encval = 0;\n"+
    "  }\n"+
    "}\n\n";
//code="encoderFunc();\n"
    Blockly.Arduino.setups_['setup_encoder_fwd'] = 'attachPinChangeInterrupt(forwardPin, encoderFunc, CHANGE); // Any state change will trigger the interrupt.\n';
    Blockly.Arduino.setups_['setup_encoder_bwd'] = 'attachPinChangeInterrupt(backwardPin, encoderFunc, CHANGE); // Any state change will trigger the interrupt.\n';
  }
  code = '...;\n';
  return code;
};

// Blockly.Arduino['mcp23s08_pins'] = function(block) {
//   var number_cspin = block.getFieldValue('CSPin');
//   var number_address = block.getFieldValue('Address');
//   // TODO: Assemble Arduino into code variable.
//   Blockly.Arduino.definitions_['define_MCP23S08'] = "#define forwardPin "+number_cspin+"\n"+
//     "  else if ( encval < -3 ) { //four steps backwards\n"+
//     "//    Serial.print(-1);\n"+
//     "//    Menu._key = -1;\n"+
//     "    counter--;\n"+
//     "    encval = 0;\n"+
//     "  }\n"+
//     "}\n\n";
// //code="encoderFunc();\n"
//     Blockly.Arduino.setups_['setup_encoder_fwd'] = 'attachPinChangeInterrupt(forwardPin, encoderFunc, CHANGE); // Any state change will trigger the interrupt.\n';
//     Blockly.Arduino.setups_['setup_encoder_bwd'] = 'attachPinChangeInterrupt(backwardPin, encoderFunc, CHANGE); // Any state change will trigger the interrupt.\n';
//   }
//   code = '...;\n';
//   return code;
// };

Blockly.Arduino['mcp23s08_pins'] = function(block) {
  var number_cspin = block.getFieldValue('CSPin');
  var number_address = block.getFieldValue('Address');
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['define_SPI'] = '#include <SPI.h>\n';
  Blockly.Arduino.definitions_['define_MCP23S08'] = '#include "mcp23s08.h"\n';
  var code = '('+number_cspin+' ,'+number_address+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['mcp23008_addrs'] = function(block) {
  var number_address = block.getFieldValue('Address');
  // TODO: Assemble Arduino into code variable.
  Blockly.Arduino.definitions_['define_SPI'] = '#include <Wire.h>\n';
  //Blockly.Arduino.definitions_['define_MCP23008'] = '#include "mcp23008.h"\n';
  var code = '('+number_address+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
  //return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino['enc_pins'] = function(block) {
  var number_enc_a = block.getFieldValue('ENC_A');
  var number_enc_b = "A3";//block.getFieldValue('ENC_B');
  var number_enc_but = block.getFieldValue('ENC_BUT');
  if (number_enc_a === "A2") {
    number_enc_b = "A3";
  } else if (number_enc_a === "4") {
    number_enc_b = "5";
  }
  // TODO: Assemble Arduino into code variable.
  var code = '#define forwardPin '+number_enc_a+'\n'+
  '#define backwardPin '+number_enc_b+'\n'+
  '#define BTN_PIN '+number_enc_but+'\n\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['dynamic_msg'] = function(block) {
  var statements_input = Blockly.Arduino.statementToCode(block, 'INPUT');
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['clear_lcd'] = function(block) {
  // TODO: Assemble Arduino into code variable.
  var code = 'lcd.clear();\n';
  return code;
};

Blockly.Arduino['print_line_1'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = 'lcd.print('+value_name+');\n';
  return code;
};

Blockly.Arduino['print_line_2'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['print_line_4'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};

Blockly.Arduino['print_line_3'] = function(block) {
  var value_name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
  // TODO: Assemble Arduino into code variable.
  var code = '...;\n';
  return code;
};
