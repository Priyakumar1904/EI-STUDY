import { State } from "./State";
import { TrafficLight } from "./TrafficLight";
import { YellowState } from "./YellowState";

class GreenState implements State {
    switchLight(trafficLight: TrafficLight): void {
        console.log("Traffic light is green. Cars can go.");
        trafficLight.setState(new YellowState());
    }
}

export { GreenState };
