import { GameObjectsController } from "../gameObjects/GameObjectsController";
import { Line } from "../math/Line";
import { Point } from "../math/Point";
import { CollisionsProcessor } from "./CollisionsProcessor";

export class CollisionController {

    private static collisionController:CollisionController;

    private gameObjectsController:GameObjectsController;

    constructor(gameObjectsController:GameObjectsController) {
        this.gameObjectsController = gameObjectsController;
        CollisionController.collisionController = this;
    }

    public static getCollisionController():CollisionController {
        return CollisionController.collisionController;
    }

    public onLineCollidesCollisionLayer(line:Line, collisionLayer:String):Array<Point> {
        const result:Array<Point> = new Array<Point>();

        this.gameObjectsController.getGameObjectsSet().forEach(gameObject => {
            if (gameObject.collisionLayer == collisionLayer) {
                result.push(CollisionsProcessor.onLineCollidesPolygon(line,gameObject.collisionMask));
            }
        });

        return result;
    }
}