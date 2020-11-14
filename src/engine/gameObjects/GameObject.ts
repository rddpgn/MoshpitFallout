import { GameEngine } from "../GameEngine";
import { Sprite } from "../graphics/Sprite";

export class GameObject {

    public x:number;
    public y:number;
    public sprite:Sprite;


    constructor(x:number, y:number, sprite:Sprite) {
        this.x = x;
        this.y = y;
        this.sprite = sprite;

        GameEngine.saveInstance(this);
    }

    public update(dt:number):void {
        
    }

    public postUpdate(dt:number):void {

    }
}