"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleBuilder = void 0;
const Vehicle_1 = require("./Vehicle");
class VehicleBuilder {
    constructor() {
        this.vehicle = new Vehicle_1.Vehicle();
    }
    setType(type) {
        this.vehicle.setType(type);
        return this;
    }
    setWheels(wheels) {
        this.vehicle.setWheels(wheels);
        return this;
    }
    setEngine(engine) {
        this.vehicle.setEngine(engine);
        return this;
    }
    build() {
        return this.vehicle;
    }
}
exports.VehicleBuilder = VehicleBuilder;
