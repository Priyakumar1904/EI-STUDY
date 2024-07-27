"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Light = void 0;
var Light = /** @class */ (function () {
    function Light() {
        this.isOn = false;
    }
    Light.prototype.on = function () {
        this.isOn = true;
        console.log("Light is ON");
    };
    Light.prototype.off = function () {
        this.isOn = false;
        console.log("Light is OFF");
    };
    return Light;
}());
exports.Light = Light;
