import { DrawAPI } from "./drawAPI";

class RedDrawAPI implements DrawAPI {
    public drawCircle(radius: number, x: number, y: number): void {
        console.log(`Drawing Circle [color: red, radius: ${radius}, x: ${x}, y: ${y}]`);
    }
}

export { RedDrawAPI };
