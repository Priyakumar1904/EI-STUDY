"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficLight = void 0;
const GreenState_1 = require("./GreenState");
class TrafficLight {
    constructor() {
        this.state = new GreenState_1.GreenState(); // Initial state
    }
    setState(state) {
        this.state = state;
    }
    switchLight() {
        this.state.switchLight(this);
    }
}
exports.TrafficLight = TrafficLight;
