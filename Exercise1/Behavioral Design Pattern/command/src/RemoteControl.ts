import { Command } from "./Command";

class RemoteControl {
    private onCommand: Command | null = null;
    private offCommand: Command | null = null;

    setCommand(onCommand: Command, offCommand: Command): void {
        this.onCommand = onCommand;
        this.offCommand = offCommand;
    }

    pressOnButton(): void {
        if (this.onCommand) {
            this.onCommand.execute();
        }
    }

    pressOffButton(): void {
        if (this.offCommand) {
            this.offCommand.execute();
        }
    }

    pressUndoButton(): void {
        if (this.onCommand) {
            this.onCommand.undo();
        }
    }
}

export { RemoteControl };
