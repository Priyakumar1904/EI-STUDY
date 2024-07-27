"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeGraphic = void 0;
class CompositeGraphic {
    constructor() {
        this.graphics = [];
    }
    add(graphic) {
        this.graphics.push(graphic);
    }
    remove(graphic) {
        const index = this.graphics.indexOf(graphic);
        if (index !== -1) {
            this.graphics.splice(index, 1);
        }
    }
    draw() {
        console.log("Drawing Composite Graphic:");
        this.graphics.forEach(graphic => graphic.draw());
    }
}
exports.CompositeGraphic = CompositeGraphic;
