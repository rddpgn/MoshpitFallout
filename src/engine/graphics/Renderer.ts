import { GameEngine } from "../GameEngine";
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
        let img = ResourceManager.getInstance().getImageFromResource("14589235.jpg");

        if (img) {
            this.ctx.drawImage(img, 0, 0);
        }
    }
}