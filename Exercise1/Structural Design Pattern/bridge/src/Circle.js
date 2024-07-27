"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(radius, x, y, drawAPI) {
        super(drawAPI);
        this.radius = radius;
        this.x = x;
        this.y = y;
    }
    draw() {
        this.drawAPI.drawCircle(this.radius, this.x, this.y);
    }
}
exports.Circle = Circle;
