import { DrawAPI } from "./drawAPI";

abstract class Shape {
    protected drawAPI: DrawAPI;

    constructor(drawAPI: DrawAPI) {
        this.drawAPI = drawAPI;
    }

    public abstract draw(): void;
}

export { Shape };
