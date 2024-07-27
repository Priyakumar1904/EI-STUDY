"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedState = void 0;
const GreenState_1 = require("./GreenState");
class RedState {
    switchLight(trafficLight) {
        console.log("Traffic light is red. Stop.");
        trafficLight.setState(new GreenState_1.GreenState());
    }
}
exports.RedState = RedState;
