import { Line } from "./Line";
import { Point } from "./Point";

export class Polygon {
    public position:Point;
    private form:Array<Line> = new Array<Line>();

    constructor(position:Point) {
        this.position = position;
    }

    public start(line:Line):Polygon {
        if (this.form.length == 0) {
            this.form.push(line);
        }
        return this;
    }

    public addEdge(point:Point):Polygon {
        if (this.form.length > 0) {1
            const startPoint = new Point(this.form[this.form.length - 1].lineEnd.x, this.form[this.form.length - 1].lineEnd.y);

            this.form.push(new Line(startPoint, point));
        }
        return this;
    }

    public finish():void {
        if (this.form.length > 1) {
            const startPoint = new Point(this.form[this.form.length - 1].lineEnd.x, this.form[this.form.length - 1].lineEnd.y);
            const endPoint = new Point(this.form[0].lineStart.x, this.form[0].lineStart.y);

            this.form.push(new Line(startPoint, endPoint));
        }
    }


    get relativeForm():Array<Line> {
        let result = new Array<Line>();
        this.form.forEach((line:Line) => {
            let relativeLine = new Line();
            relativeLine.lineStart = Point.sumPoints(line.lineStart, this.position);
            relativeLine.lineEnd = Point.sumPoints(line.lineEnd, this.position);

            result.push(relativeLine)
        });
        return result;
    }
}