"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrafficLight = void 0;
var GreenState_1 = require("./GreenState");
var TrafficLight = /** @class */ (function () {
    function TrafficLight() {
        this.state = new GreenState_1.GreenState(); // Initial state
    }
    TrafficLight.prototype.setState = function (state) {
        this.state = state;
    };
    TrafficLight.prototype.switchLight = function () {
        this.state.switchLight(this);
    };
    return TrafficLight;
}());
exports.TrafficLight = TrafficLight;
