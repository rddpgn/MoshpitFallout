import { GameEngine } from "../GameEngine";
import { GameEngineController } from "../GameEngineController";
import { GameObject } from "../gameObjects/GameObject";
import { ResourceManager } from "../resourceManager/ResourceManager";

export class Renderer {

    private ctx:CanvasRenderingContext2D;
    private canvas:HTMLCanvasElement;

    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    public renderGameObjects(gameObjects:Set<GameObject>):void {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        gameObjects.forEach((obj:GameObject) => {
            if (obj.sprite) {
                this.ctx.drawImage(obj.sprite.image, obj.x, obj.y);
            }
        });
    }
}