export class Point {
    public x:number;
    public y:number;

    constructor(x:number = 0, y:number = 0) {
        this.x = x;
        this.y = y;
    }

    public getLenght():number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public static sumPoints(pointA:Point, pointB:Point):Point {
        return new Point(pointA.x + pointB.x, pointA.y + pointB.y);
    }

    public static subStractPoints(pointA:Point, pointB:Point):Point {
        return new Point(pointA.x - pointB.x, pointA.y - pointB.y);
    }
}