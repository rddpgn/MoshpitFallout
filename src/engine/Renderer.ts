import { GameEngineFacade } from "./GameEngineFacade";
import { GameObject } from "./gameObjects/GameObject";

export class Renderer {

    private ctx:CanvasRenderingContext2D;

    constructor(ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public renderGameObjects(gameObjects:Set<GameObject>):void {
        this.ctx.clearRect(0,0,GameEngineFacade.getCanvasWidth(),GameEngineFacade.getCanvasHeight());
    }
}