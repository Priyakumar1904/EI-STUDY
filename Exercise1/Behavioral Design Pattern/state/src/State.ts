import type { TrafficLight } from "./TrafficLight";

interface State {
    switchLight(trafficLight: TrafficLight): void;
}

export { State };
