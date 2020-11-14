import { Point } from "./Point";

export class Circle {
    public center:Point;
    public radius:number;

    constructor(center:Point = new Point(0,0), radius:number = 0) {
        this.center = center;
        this.radius = radius;
    }
}