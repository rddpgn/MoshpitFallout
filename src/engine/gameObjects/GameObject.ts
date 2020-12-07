import { GameEngine } from "../GameEngine";
import { Sprite } from "../graphics/Sprite";
import { Point } from "../math/Point";
import { Polygon } from "../math/Polygon";
import { GameObjectComponent } from "./GameObjectComponent";

export class GameObject {

    public position:Point = new Point();
    public collisionMask:Polygon;
    public sprite:Sprite;
    public collisionLayer:string;

    protected components:Array<GameObjectComponent>;

    constructor(x:number, y:number) {
        this.position.x = x;
        this.position.y = y;
        this.components = new Array<GameObjectComponent>();
        GameEngine.saveInstance(this);
    }

    public update(dt:number):void {
        this.components.forEach(component => component.update());
    }

    public postUpdate(dt:number):void {

    }
}