import { State } from "./State";
import { GreenState } from "./GreenState";

class TrafficLight {
    private state: State;

    constructor() {
        this.state = new GreenState(); // Initial state
    }

    setState(state: State): void {
        this.state = state;
    }

    switchLight(): void {
        this.state.switchLight(this);
    }
}

export { TrafficLight };
