"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOnCommand = void 0;
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    LightOnCommand.prototype.undo = function () {
        this.light.off();
    };
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
