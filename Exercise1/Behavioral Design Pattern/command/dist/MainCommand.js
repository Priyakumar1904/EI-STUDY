"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Light_1 = require("./Light");
const LightOnCommand_1 = require("./LightOnCommand");
const LightOffCommand_1 = require("./LightOffCommand");
const RemoteControl_1 = require("./RemoteControl");
const light = new Light_1.Light();
const lightOn = new LightOnCommand_1.LightOnCommand(light);
const lightOff = new LightOffCommand_1.LightOffCommand(light);
const remote = new RemoteControl_1.RemoteControl();
remote.setCommand(lightOn, lightOff);
remote.pressOnButton();
remote.pressOffButton();
remote.pressUndoButton();
