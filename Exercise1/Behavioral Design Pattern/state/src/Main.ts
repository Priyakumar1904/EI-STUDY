import { TrafficLight } from "./TrafficLight";

const trafficLight = new TrafficLight();

console.log("Starting traffic light sequence:");
trafficLight.switchLight(); // Green -> Yellow
trafficLight.switchLight(); // Yellow -> Red
trafficLight.switchLight(); // Red -> Green
trafficLight.switchLight(); // Green -> Yellow (cycle continues)
