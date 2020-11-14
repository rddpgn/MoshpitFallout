import { GameEngine } from "../../engine/GameEngine";
import { GameEngineController } from "../../engine/GameEngineController";
import { GameObject } from "../../engine/gameObjects/GameObject";
import { Circle } from "../../engine/math/Circle";
import { Line } from "../../engine/math/Line";
import { Point } from "../../engine/math/Point";
import { Polygon } from "../../engine/math/Polygon";
import { CollisionsProcessor } from "../../engine/physics/CollisionsProcessor";
import { Scene } from "../../engine/sceneManager/Scene";

export class TestScene extends Scene {

    private mouseLine = new Line(new Point(300,100), GameEngine.getInputController().getMousePosition());
    private polygon = new Polygon(new Point(500,500));
    private complexPolygon = new Polygon(new Point(500,100));

    private circle = new Circle(new Point(), 6);
    public init():void {
        this.polygon.start(new Line(new Point(0, -64), new Point(64, 0)))
            .addEdge(new Point(0, 64))
            .addEdge(new Point(-64, 0))
            .finish();

        this.complexPolygon.start(new Line(new Point(-152/2, 296/2), new Point(466/2, 77/2)))
            .addEdge(new Point(-191/2, -159/2))
            .addEdge(new Point(-239/2, 150/2))
            .addEdge(new Point(70/2,35/2))
            .finish();


        GameEngine.drawLine(this.mouseLine);
        GameEngine.drawPolygon(this.polygon);
        GameEngine.drawPolygon(this.complexPolygon);
        GameEngine.drawCircle(this.circle);

    }

    public update():void {
        let result = CollisionsProcessor.onLineCollidesPolygon(this.mouseLine, this.polygon);
        result ? this.circle.center = result : this.circle.center = new Point(-100,-100);

        if (!result) {
            let result2 = CollisionsProcessor.onLineCollidesPolygon(this.mouseLine, this.complexPolygon);
            result2 ? this.circle.center = result2 : this.circle.center = new Point(-100,-100);
        }
    }
}