/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="MIDI_LCD" name="MIDI LCD">'+
'    <block type="smartcontrol_lcd" collapsed="true">'+
'    <field name="PROTOCOL">SPI2Defs</field>'+
'    <field name="controlPins">ENC</field>'+
'    <value name="DEFINE_PROTOCOL">'+
'      <block type="mcp23s08_pins" collapsed="true">'+
'        <field name="CSPin">8</field>'+
'        <field name="Address">0x00</field>'+
'      </block>'+
'    </value>'+
'    <value name="DEFINE_CONTROL_PINS">'+
'      <block type="enc_pins" collapsed="true">'+
'        <field name="ENC_A">A2</field>'+
'        <field name="ENC_BUT">8</field>'+
'      </block>'+
'    </value>'+
'    <statement name="Splash">'+
'      <block type="variables_set" collapsed="true">'+
'        <field name="VAR">counter</field>'+
'        <value name="VALUE">'+
'          <block type="variables_set_type">'+
'            <field name="VARIABLE_SETTYPE_TYPE">SHORT_NUMBER</field>'+
'            <value name="VARIABLE_SETTYPE_INPUT">'+
'              <block type="math_number">'+
'                <field name="NUM">0</field>'+
'              </block>'+
'            </value>'+
'          </block>'+
'        </value>'+
'        <next>'+
'          <block type="clear_lcd">'+
'            <next>'+
'              <block type="print_line_1">'+
'                <value name="NAME">'+
'                  <block type="text">'+
'                    <field name="TEXT">Test</field>'+
'                  </block>'+
'                </value>'+
'                <next>'+
'                  <block type="print_line_2">'+
'                    <value name="NAME">'+
'                      <block type="text">'+
'                        <field name="TEXT">for 20x4 LCD and</field>'+
'                      </block>'+
'                    </value>'+
'                    <next>'+
'                      <block type="print_line_3">'+
'                        <value name="NAME">'+
'                          <block type="text">'+
'                            <field name="TEXT">encoder.</field>'+
'                          </block>'+
'                        </value>'+
'                        <next>'+
'                          <block type="print_line_4">'+
'                            <value name="NAME">'+
'                              <block type="text">'+
'                                <field name="TEXT">Rotate encoder...</field>'+
'                              </block>'+
'                            </value>'+
'                          </block>'+
'                        </next>'+
'                      </block>'+
'                    </next>'+
'                  </block>'+
'                </next>'+
'              </block>'+
'            </next>'+
'          </block>'+
'        </next>'+
'      </block>'+
'    </statement>'+
'    <statement name="Menu">'+
'      <block type="dynamic_msg" collapsed="true">'+
'        <value name="messageVar">'+
'          <block type="variables_get">'+
'            <field name="VAR">counter</field>'+
'          </block>'+
'        </value>'+
'        <statement name="INPUT">'+
'          <block type="clear_lcd">'+
'            <next>'+
'              <block type="print_line_1">'+
'                <value name="NAME">'+
'                  <block type="text">'+
'                    <field name="TEXT">Counter change:</field>'+
'                  </block>'+
'                </value>'+
'                <next>'+
'                  <block type="print_line_2">'+
'                    <value name="NAME">'+
'                      <block type="variables_get">'+
'                        <field name="VAR">counter</field>'+
'                      </block>'+
'                    </value>'+
'                  </block>'+
'                </next>'+
'              </block>'+
'            </next>'+
'          </block>'+
'        </statement>'+
'      </block>'+
'    </statement>'+
'  </block>'+
'      <block type="enc_pins"></block>'+
'      <block type="dynamic_msg"></block>'+
'      <block type="clear_lcd"></block>'+
'      <block type="print_line_1"></block>'+
'      <block type="print_line_2"></block>'+
'      <block type="print_line_3"></block>'+
'      <block type="print_line_4"></block>'+
'    </category>'+
'  <sep></sep>' +
'  <category id="UriShX_protocol" name="UriShX protocol">' +
'      <block type="mcp23s08_pins"></block>'+
'      <block type="mcp23008_addrs"></block>'+
'  </category>' +
'  <sep></sep>'+
'  <category id="D_in_btns" name="Digital input matrix">'+
'     <block type="digital_input_matrix">'+
'       <field name="PROTOCOL">SPI2Defs</field>'+
'    <value name="PROTOCOL">'+
'        <block type="mcp23s08_pins">'+
'        <field name="CSPin">8</field>'+
'          <field name="Address">0x00</field>'+
'        </block>'+
'      </value>'+
'      <statement name="BTN_LIST">'+
'        <block type="btn_definition">'+
'          <field name="BTN_NUM">1</field>'+
'          <field name="ON_OFF">0</field>'+
'          <value name="NAME">'+
'            <block type="btn_value">'+
'              <field name="cc_or_note">CC</field>'+
'              <field name="note_list">0</field>'+
'            </block>'+
'          </value>'+
'        </block>'+
'      </statement>'+
'    </block>'+
'    <block type="btn_definition"></block>'+
'    <block type="btn_value"></block>'+
'  </category>'+
'  <sep></sep>'+
'  <category id="Advanced" name="Advenced">'+
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <shadow type="math_number">' +
'          <field name="NUM">100</field>' +
'        </shadow>' +
'      </value>'+
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio">' +
'    <block type="io_tone">' +
'      <field name="TONEPIN">0</field>' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors">' +
'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_read"></block>' +
'    <block type="stepper_config">' +
'      <field name="STEPPER_NUMBER_OF_PINS">2</field>' +
'      <field name="STEPPER_PIN1">1</field>' +
'      <field name="STEPPER_PIN2">2</field>' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="stepper_step">' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catComms" name="Comms">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="spi_setup"></block>' +
'    <block type="spi_transfer"></block>' +
'    <block type="spi_transfer_return"></block>' +
'  </category>' +
' </category>'+
'</xml>';
