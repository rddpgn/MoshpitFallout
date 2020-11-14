import { Point } from "./Point";

export class Line {
    public lineStart:Point;
    public lineEnd:Point;
    public color:string;

    constructor(lineStart:Point = new Point(0,0), lineEnd:Point = new Point(0,0)) {
        this.lineStart = lineStart;
        this.lineEnd = lineEnd;
    }

    public getLength():number {
        return Math.sqrt((this.lineStart.x - this.lineEnd.x) * (this.lineStart.x - this.lineEnd.x) + 
                         (this.lineStart.y - this.lineEnd.y) * (this.lineStart.y - this.lineEnd.y));
    }
   
}