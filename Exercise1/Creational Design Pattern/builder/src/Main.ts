import { VehicleBuilder } from "./VehicleBuilder";

const vehicleBuilder = new VehicleBuilder();
const car = vehicleBuilder.setType("Car").setWheels(4).setEngine("V6").build();
car.describe();

const bike = vehicleBuilder.setType("Bike").setWheels(2).setEngine("V2").build();
bike.describe();
