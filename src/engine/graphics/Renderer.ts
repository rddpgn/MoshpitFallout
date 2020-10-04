import { GameEngineFacade } from "../GameEngineFacade";
import { GameObject } from "../gameObjects/GameObject";
import { ResourceManager } from "../ResourceManager";

export class Renderer {

    private ctx:CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public renderGameObjects(gameObjects:Set<GameObject>):void {
        this.ctx.clearRect(0,0,GameEngineFacade.getCanvasWidth(),GameEngineFacade.getCanvasHeight());
        let img = ResourceManager.getInstance().getImageFromResource("14589235.jpg");

        if (img) {
            this.ctx.drawImage(img, 0, 0);
        }

        console.log(img);
    }
}