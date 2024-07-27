"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const RedDrawAPI_1 = require("./RedDrawAPI");
const redDrawAPI = new RedDrawAPI_1.RedDrawAPI();
const redCircle = new Circle_1.Circle(10, 100, 100, redDrawAPI);
redCircle.draw();
