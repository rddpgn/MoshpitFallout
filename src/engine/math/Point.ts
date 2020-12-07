export class Point {
    public x:number;
    public y:number;

    constructor(x:number = 0, y:number = 0) {
        this.x = x;
        this.y = y;
    }

    public set(x:number, y:number):Point {
        this.x = x;
        this.y = y;
        return this;
    }

    public add(x:number, y:number):Point {
        this.x += x;
        this.y += y;
        return this;
    }

    public addFrom(x:number, y:number):Point {
        var tmpPoint = new Point();
        tmpPoint.x = this.x;
        tmpPoint.y = this.y;
        tmpPoint.add(x,y);
        return tmpPoint;
    }

    public addPoint(point:Point):Point {
        this.x += point.x;
        this.y += point.y;
        return this;
    }

    public substractPoint(point:Point):Point {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }
    
    public static sumPoints(pointA:Point, pointB:Point):Point {
        return new Point(pointA.x + pointB.x, pointA.y + pointB.y);
    }

    public static subStractPoints(pointA:Point, pointB:Point):Point {
        return new Point(pointA.x - pointB.x, pointA.y - pointB.y);
    }
}