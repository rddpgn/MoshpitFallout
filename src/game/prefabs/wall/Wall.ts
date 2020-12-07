import { GameObject } from "../../../engine/gameObjects/GameObject";
import {CollisionLayers} from "../../utils/CollisionLayers";
import {Polygon} from "../../../engine/math/Polygon";
import {Point} from "../../../engine/math/Point";
import {Line} from "../../../engine/math/Line";
import {GameEngine} from "../../../engine/GameEngine";

export class Wall extends GameObject {
    constructor(x:number, y:number) {
        super(x,y);
        this.collisionLayer = CollisionLayers.WALL;
        this.collisionMask = this.createCollisionMask();
    }

    private createCollisionMask():Polygon {
        const mask = new Polygon(new Point(640,480));
        mask.start(new Line(new Point(-300,-32), new Point(300,-32)))
            .addEdge(new Point(300, 32))
            .addEdge(new Point(-300,32))
            .finish();

        GameEngine.drawPolygon(mask);
        return mask;
    }
}