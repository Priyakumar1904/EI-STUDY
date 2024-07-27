"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedState = void 0;
var GreenState_1 = require("./GreenState");
var RedState = /** @class */ (function () {
    function RedState() {
    }
    RedState.prototype.switchLight = function (trafficLight) {
        console.log("Traffic light is red. Stop.");
        trafficLight.setState(new GreenState_1.GreenState());
    };
    return RedState;
}());
exports.RedState = RedState;
