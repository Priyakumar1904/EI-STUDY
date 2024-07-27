"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YellowState = void 0;
const RedState_1 = require("./RedState");
class YellowState {
    switchLight(trafficLight) {
        console.log("Traffic light is yellow. Prepare to stop.");
        trafficLight.setState(new RedState_1.RedState());
    }
}
exports.YellowState = YellowState;
