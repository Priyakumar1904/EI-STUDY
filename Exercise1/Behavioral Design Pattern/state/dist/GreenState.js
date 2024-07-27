"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenState = void 0;
const YellowState_1 = require("./YellowState");
class GreenState {
    switchLight(trafficLight) {
        console.log("Traffic light is green. Cars can go.");
        trafficLight.setState(new YellowState_1.YellowState());
    }
}
exports.GreenState = GreenState;
