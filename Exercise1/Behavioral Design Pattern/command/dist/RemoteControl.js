"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
class RemoteControl {
    constructor() {
        this.onCommand = null;
        this.offCommand = null;
    }
    setCommand(onCommand, offCommand) {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }
    pressOnButton() {
        if (this.onCommand) {
            this.onCommand.execute();
        }
    }
    pressOffButton() {
        if (this.offCommand) {
            this.offCommand.execute();
        }
    }
    pressUndoButton() {
        if (this.onCommand) {
            this.onCommand.undo();
        }
    }
}
exports.RemoteControl = RemoteControl;
