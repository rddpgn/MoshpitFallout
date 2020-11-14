import { GameEngine } from "../../engine/GameEngine";
import { GameEngineController } from "../../engine/GameEngineController";
import { GameObject } from "../../engine/gameObjects/GameObject";
import { Circle } from "../../engine/math/Circle";
import { Line } from "../../engine/math/Line";
import { Point } from "../../engine/math/Point";
import { Polygon } from "../../engine/math/Polygon";
import { CollisionsProcessor } from "../../engine/physics/CollisionsProcessor";
import { Scene } from "../../engine/sceneManager/Scene";
import { Player } from "../prefabs/Player";

export class TestScene extends Scene {

    public init():void {
        let wall = new Polygon(new Point(640,480));
        wall.start(new Line(new Point(-300,-32), new Point(300,-32)))
            .addEdge(new Point(300, 32))
            .addEdge(new Point(-300,32))
            .finish();
        
        GameEngine.drawPolygon(wall);

        new Player(640,200, wall);
        
       
    }
}