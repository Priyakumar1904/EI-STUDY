import { Vehicle } from "./Vehicle";

class VehicleBuilder {
    private vehicle: Vehicle;

    constructor() {
        this.vehicle = new Vehicle();
    }

    public setType(type: string): VehicleBuilder {
        this.vehicle.setType(type);
        return this;
    }

    public setWheels(wheels: number): VehicleBuilder {
        this.vehicle.setWheels(wheels);
        return this;
    }

    public setEngine(engine: string): VehicleBuilder {
        this.vehicle.setEngine(engine);
        return this;
    }

    public build(): Vehicle {
        return this.vehicle;
    }
}

export { VehicleBuilder };
