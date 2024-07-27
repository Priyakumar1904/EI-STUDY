"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor() {
        this.type = '';
        this.wheels = 0;
        this.engine = '';
    }
    setType(type) {
        this.type = type;
    }
    setWheels(wheels) {
        this.wheels = wheels;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    describe() {
        console.log(`Vehicle Type: ${this.type}, Wheels: ${this.wheels}, Engine: ${this.engine}`);
    }
}
exports.Vehicle = Vehicle;
