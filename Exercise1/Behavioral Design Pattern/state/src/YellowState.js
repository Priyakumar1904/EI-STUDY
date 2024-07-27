"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YellowState = void 0;
var RedState_1 = require("./RedState");
var YellowState = /** @class */ (function () {
    function YellowState() {
    }
    YellowState.prototype.switchLight = function (trafficLight) {
        console.log("Traffic light is yellow. Prepare to stop.");
        trafficLight.setState(new RedState_1.RedState());
    };
    return YellowState;
}());
exports.YellowState = YellowState;
