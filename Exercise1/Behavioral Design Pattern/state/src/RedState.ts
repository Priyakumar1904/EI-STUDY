import { State } from "./State";
import { TrafficLight } from "./TrafficLight";
import { GreenState } from "./GreenState";

class RedState implements State {
    switchLight(trafficLight: TrafficLight): void {
        console.log("Traffic light is red. Stop.");
        trafficLight.setState(new GreenState());
    }
}

export { RedState };
