import { Circle } from "./Circle";
import { RedDrawAPI } from "./RedDrawAPI";

const redDrawAPI = new RedDrawAPI();
const redCircle = new Circle(10, 100, 100, redDrawAPI);
redCircle.draw();
