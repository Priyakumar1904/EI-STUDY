"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Light = void 0;
class Light {
    constructor() {
        this.isOn = false;
    }
    on() {
        this.isOn = true;
        console.log("Light is ON");
    }
    off() {
        this.isOn = false;
        console.log("Light is OFF");
    }
}
exports.Light = Light;
