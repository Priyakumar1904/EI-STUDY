"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.onCommand = null;
        this.offCommand = null;
    }
    RemoteControl.prototype.setCommand = function (onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    };
    RemoteControl.prototype.pressOnButton = function () {
        if (this.onCommand) {
            this.onCommand.execute();
        }
    };
    RemoteControl.prototype.pressOffButton = function () {
        if (this.offCommand) {
            this.offCommand.execute();
        }
    };
    RemoteControl.prototype.pressUndoButton = function () {
        if (this.onCommand) {
            this.onCommand.undo();
        }
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
