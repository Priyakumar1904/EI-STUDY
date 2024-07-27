"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenState = void 0;
var YellowState_1 = require("./YellowState");
var GreenState = /** @class */ (function () {
    function GreenState() {
    }
    GreenState.prototype.switchLight = function (trafficLight) {
        console.log("Traffic light is green. Cars can go.");
        trafficLight.setState(new YellowState_1.YellowState());
    };
    return GreenState;
}());
exports.GreenState = GreenState;
