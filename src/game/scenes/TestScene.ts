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
    public init():void {
        /*
        let player = new GameObject(0,0, GameEngine.createSprite('14236622769995'));
        let inputController = GameEngine.getInputController();

        inputController.onKeyboardButtonPressing('KeyW', player, () => player.y -= 5);
        inputController.onKeyboardButtonPressing('KeyA', player, () => player.x -= 5);
        inputController.onKeyboardButtonPressing('KeyS', player, () => player.y += 5);
        inputController.onKeyboardButtonPressing('KeyD', player, () => player.x += 5);
        */

        /*
        let polygon = new Polygon(new Point(100,100));
        polygon.start(new Line(new Point(0, -64), new Point(64, 0)))
               .addEdge(new Point(0, 64))
               .addEdge(new Point(-64, 0))
               .finish();

        GameEngine.drawPolygon(polygon);

        let line = new Line(new Point(0,0), GameEngine.getInputController().getMousePosition());
        GameEngine.drawLine(line);*/

        let lineA = new Line(new Point(100,100), new Point(300,300));
        let lineB = new Line(new Point(200,100), new Point(100,440));

        let polygon = new Polygon(new Point(100,100));
        polygon.start(new Line(new Point(0, -64), new Point(64, 0)))
               .addEdge(new Point(0, 64))
               .addEdge(new Point(-64, 0))
               .finish();

        GameEngine.drawLine(lineA);
        //GameEngine.drawLine(lineB);

        GameEngine.drawPolygon(polygon);

        let result = CollisionsProcessor.onLineCollidesPolygon(lineA, polygon);

        if (result) {
            let circle = new Circle(result, 4);
            GameEngine.drawCircle(circle);
        }
    }
}