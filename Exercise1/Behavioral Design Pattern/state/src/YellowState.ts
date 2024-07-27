import { State } from "./State";
import { TrafficLight } from "./TrafficLight";
import { RedState } from "./RedState";

class YellowState implements State {
    switchLight(trafficLight: TrafficLight): void {
        console.log("Traffic light is yellow. Prepare to stop.");
        trafficLight.setState(new RedState());
    }
}

export { YellowState };
