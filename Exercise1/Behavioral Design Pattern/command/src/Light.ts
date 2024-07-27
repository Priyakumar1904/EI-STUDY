class Light {
    private isOn: boolean = false;

    on(): void {
        this.isOn = true;
        console.log("Light is ON");
    }

    off(): void {
        this.isOn = false;
        console.log("Light is OFF");
    }
}

export { Light };
