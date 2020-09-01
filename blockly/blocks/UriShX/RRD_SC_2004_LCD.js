'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.RRD_SC_2004_LCD');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

//Blockly.Types.addType('volatile byte', 'high speed access short number',);

Blockly.Blocks['smartcontrol_lcd'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("2004 LCD w/Rotary Encoder");
    this.appendValueInput("DEFINE_PROTOCOL")
        //.setCheck(null)
        .appendField(new Blockly.FieldDropdown([["SPI (MCP23S08)","SPI2Defs"], ["I2C (MCP23008)","I2C1Def"], ["Parallel","MEGA6Defs"]]), "PROTOCOL");
    this.appendValueInput("DEFINE_CONTROL_PINS")
        //.setCheck(null)
        .appendField(new Blockly.FieldDropdown([["Encoder","ENC"], ["Analog","AnaBut"]]), "controlPins");
    this.appendStatementInput("Splash")
        .setCheck(null)
        .appendField("Splash Message");
    this.appendStatementInput("Menu")
        .setCheck(null)
        .appendField("Menu Items");
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
},

onchange: function(event) {
        var test1 = this.getFieldValue('PROTOCOL');
        var test2;
        var testInput = this.getFieldValue('controlPins');
        var testInputBlock;
        if ((typeof  this.getInputTargetBlock('DEFINE_PROTOCOL') != 'undefined') || (typeof  this.getInputTargetBlock('DEFINE_CONTROL_PINS') != 'undefined')) {
          test2  = this.getInputTargetBlock('DEFINE_PROTOCOL').type;
          testInputBlock = this.getInputTargetBlock('DEFINE_CONTROL_PINS').type;
        }
        //alert(this.getInputTargetBlock('DEFINE_PROTOCOL').type+' , '+this.getInputTargetBlock('DEFINE_CONTROL_PINS').type);
          if ( (test1 === "SPI2Defs" && test2 !== "mcp23s08_pins") || (test1 === "I2C1Def" && test2 !== "mcp23008_addrs")) {
            alert("Communication protocol and definition block must match!");
            this.getInputTargetBlock('DEFINE_PROTOCOL').unplug();
          }
          //if ((testInputBlock.length > 0 && test2.length == 0) ) {
          if ( (testInput === "ENC" && testInputBlock !== "enc_pins") || (testInput === "AnaBut" && testInputBlock !== "anaBtnPins")) {
            alert("LCD position control and definition block must match!");
            this.getInputTargetBlock('DEFINE_CONTROL_PINS').unplug();
          }
        //}
    }
};

Blockly.Blocks['mcp23s08_pins'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("SPI pins and address")
        .appendField(new Blockly.FieldDropdown([["8","8"],["9","9"]]), "CSPin")
        .appendField(new Blockly.FieldDropdown([["0","0x00"], ["1","0x01"], ["2","0x02"], ["3","0x03"]]), "Address");
        //.appendField(new Blockly.FieldNumber(9, 4, 10, 1), "CSPin")
        //.appendField(new Blockly.FieldNumber(0, 0, 3, 1), "Address");
    this.setOutput(true);//, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
}
};

Blockly.Blocks['mcp23008_addrs'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("I2C Address")
        .appendField(new Blockly.FieldDropdown([["0","0x00"], ["1","0x01"], ["2","0x02"], ["3","0x03"], ["4","0x04"], ["5","0x05"], ["6","0x06"], ["7","0x07"]]), "Address");
    this.setOutput(true);//, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
}
};

Blockly.Blocks['enc_pins'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("Encoder pins")
        .appendField(new Blockly.FieldDropdown([["Analog pins A2+A3","A2"], ["Digital pins 4+5","4"]]), "ENC_A")
        //.appendField(new Blockly.FieldDropdown([["Analog pin 3","A3"], ["Digital pin 5","5"]]), "ENC_B")
        .appendField(new Blockly.FieldDropdown([["Digital pin 8","8"], ["Digital pin 7","7"]]), "ENC_BUT");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dynamic_msg'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("Dynamic message");
        this.appendValueInput("messageVar")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("on change of:");
    this.appendStatementInput("INPUT")
        .setCheck(["Number", "String", "Variable"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['clear_lcd'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
        .appendField("Clear LCD screen");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_line_1'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendValueInput("NAME")
        //.setCheck(["String", "Number", "Variable"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Line 1:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_line_2'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendValueInput("NAME")
        //.setCheck(["String", "Number", "Variable"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Line 2:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_line_4'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendValueInput("NAME")
        //.setCheck(["String", "Number", "Variable"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Line 4:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['print_line_3'] = {
  /**
   * Block for for the spi transfer. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.appendValueInput("NAME")
        //.setCheck(["String", "Number", "Variable"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Line 3:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
