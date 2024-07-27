import { Graphic } from "./Graphic";

class Circle implements Graphic {
    public draw(): void {
        console.log("Drawing a Circle.");
    }
}

export { Circle };
