import { Circle } from "./Circle";
import { CompositeGraphic } from "./CompositeGraphic";

const circle1 = new Circle();
const circle2 = new Circle();

const compositeGraphic = new CompositeGraphic();
compositeGraphic.add(circle1);
compositeGraphic.add(circle2);

compositeGraphic.draw();
