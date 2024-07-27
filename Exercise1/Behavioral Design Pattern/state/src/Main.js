"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrafficLight_1 = require("./TrafficLight");
var trafficLight = new TrafficLight_1.TrafficLight();
console.log("Starting traffic light sequence:");
trafficLight.switchLight(); // Green -> Yellow
trafficLight.switchLight(); // Yellow -> Red
trafficLight.switchLight(); // Red -> Green
trafficLight.switchLight(); // Green -> Yellow (cycle continues)
