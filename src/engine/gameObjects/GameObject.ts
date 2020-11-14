import { GameEngine } from "../GameEngine";
import { Sprite } from "../graphics/Sprite";
import { Point } from "../math/Point";

export class GameObject {

    public position:Point = new Point();
    public sprite:Sprite;

    constructor(x:number, y:number) {
        this.position.x = x;
        this.position.y = y;

        GameEngine.saveInstance(this);
    }

    public update(dt:number):void {
        
    }

    public postUpdate(dt:number):void {

    }
}