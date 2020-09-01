'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.digitalInMatrix');

goog.require('Blockly.Blocks');
//goog.require('Blockly.Types');

Blockly.Blocks['btn_value'] = {
  init: function() {
    var NOTE_VALS = this.RTL ? [
      ["C -1","0"],
      ["C# -1","1"],
      ["C 0","12"],
      ["C 9","120"],
      ["G 9","127"]
    ] : [
      ["C -1","0"],
      ["C# -1","1"],
      ["C 0","12"],
      ["C 9","120"],
      ["G 9","127"]
    ];
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["CC","CC"], ["Note","Note"]]), "cc_or_note")
        .appendField(new Blockly.FieldDropdown([["C -1","0"], ["C# -1","1"], ["C 0","12"], ["C 9","120"], ["G 9","127"]]), "note_list");//(NOTE_VALS);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['digital_input_matrix'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Digital input matrix");
    this.appendValueInput("PROTOCOL")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["SPI (mcp23s08)","SPI2Defs"], ["I2C (mcp23008)","I2C1Defs"]]), "PROTOCOL");
    this.appendStatementInput("BTN_LIST")
        .setCheck(null)
        .appendField("Buttons list:");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['btn_definition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button number")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "BTN_NUM");
    this.appendValueInput("NAME")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("functions as");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", with default value:")
        .appendField(new Blockly.FieldDropdown([["ON","1"], ["OFF","0"]]), "ON_OFF");
    this.setInputsInline(true);
    this.setPreviousStatement(true);//, null);
    this.setNextStatement(true);//, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
