import { Line } from "../math/Line";
import { Point } from "../math/Point";
import { Polygon } from "../math/Polygon";

export class CollisionsProcessor {

    public static onLineCollidesPolygon(line:Line, polygon:Polygon):Point {
        const polygonLines = polygon.relativeForm;
        const resultPoints = new Array<Point>();

        polygonLines.forEach((edge:Line) => {
            const collisionResult = CollisionsProcessor.onLineCollidesLine(edge, line);
            collisionResult && resultPoints.push(collisionResult);
        });

        resultPoints.sort((edgeA:Point, edgeB:Point) => {
            return CollisionsProcessor.calcPointPseudoLenght(Point.subStractPoints(edgeA, line.lineStart)) - 
                   CollisionsProcessor.calcPointPseudoLenght(Point.subStractPoints(edgeB, line.lineStart));
        });

        return resultPoints[0];
    }

    private static calcPointPseudoLenght(point:Point):number {
        return Math.sqrt(point.x * point.x + point.y * point.y);
    }


    public static onLineCollidesLine(lineA:Line, lineB:Line):Point {
        const x1 = lineA.lineStart.x;
        const x2 = lineA.lineEnd.x;
        const x3 = lineB.lineStart.x;
        const x4 = lineB.lineEnd.x;

        const y1 = lineA.lineStart.y;
        const y2 = lineA.lineEnd.y;
        const y3 = lineB.lineStart.y;
        const y4 = lineB.lineEnd.y;

        const uA = ((x4-x3)*(y1-y3) - (y4-y3)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));
        const uB = ((x2-x1)*(y1-y3) - (y2-y1)*(x1-x3)) / ((y4-y3)*(x2-x1) - (x4-x3)*(y2-y1));

        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
            const intersectionX = x1 + (uA * (x2-x1));
            const intersectionY = y1 + (uA * (y2-y1));

            return new Point(intersectionX, intersectionY);
        }
        return null;
    }
}