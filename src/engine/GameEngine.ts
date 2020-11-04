import { GameConfig } from "../../rdengine.config";
import { GameEngineController } from "./GameEngineController";
import { ResourceManager } from "./resourceManager/ResourceManager";

export class GameEngine {
    private static engine:GameEngineController;

    public static start(canvas:HTMLCanvasElement, config:GameConfig):void {
        let ctx = canvas.getContext('2d');
        GameEngine.engine = new GameEngineController(canvas, ctx, config);
    }
    
    public static getCanvasWidth():number {
        return GameEngine.engine && GameEngine.engine.getCanvasWidth();
    }

    public static getCanvasHeight():number {
        return GameEngine.engine && GameEngine.engine.getCanvasHeight();
    }
}