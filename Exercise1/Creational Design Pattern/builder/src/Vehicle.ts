class Vehicle {
    private type: string = '';
    private wheels: number = 0;
    private engine: string = '';

    public setType(type: string): void {
        this.type = type;
    }

    public setWheels(wheels: number): void {
        this.wheels = wheels;
    }

    public setEngine(engine: string): void {
        this.engine = engine;
    }

    public describe(): void {
        console.log(`Vehicle Type: ${this.type}, Wheels: ${this.wheels}, Engine: ${this.engine}`);
    }
}

export { Vehicle };
