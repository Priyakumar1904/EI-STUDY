import { Graphic } from "./Graphic";

class CompositeGraphic implements Graphic {
    private graphics: Graphic[] = [];

    public add(graphic: Graphic): void {
        this.graphics.push(graphic);
    }

    public remove(graphic: Graphic): void {
        const index = this.graphics.indexOf(graphic);
        if (index !== -1) {
            this.graphics.splice(index, 1);
        }
    }

    public draw(): void {
        console.log("Drawing Composite Graphic:");
        this.graphics.forEach(graphic => graphic.draw());
    }
}

export { CompositeGraphic };
