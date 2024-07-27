"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleBuilder_1 = require("./VehicleBuilder");
const vehicleBuilder = new VehicleBuilder_1.VehicleBuilder();
const car = vehicleBuilder.setType("Car").setWheels(4).setEngine("V6").build();
car.describe();
const bike = vehicleBuilder.setType("Bike").setWheels(2).setEngine("V2").build();
bike.describe();
