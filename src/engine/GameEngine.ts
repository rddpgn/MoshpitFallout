import { GameConfig } from "../../rdengine.config";
import { GameEngineController } from "./GameEngineController";
import { GameObject } from "./gameObjects/GameObject";
import { Sprite } from "./graphics/Sprite";
import { ResourceManager } from "./resourceManager/ResourceManager";

export class GameEngine {
    private static engine:GameEngineController;

    public static start(canvas:HTMLCanvasElement, config:GameConfig, onLoadedCallback:Function):void {
        if (!GameEngine.engine) {
            let ctx = canvas.getContext('2d');
            GameEngine.engine = new GameEngineController(canvas, ctx, config, onLoadedCallback);
        }
    }
    
    public static getCanvasWidth():number {
        return GameEngine.engine && GameEngine.engine.getCanvasWidth();
    }

    public static getCanvasHeight():number {
        return GameEngine.engine && GameEngine.engine.getCanvasHeight();
    }

    public static instanceCreate(x:number, y:number, sprite:Sprite ):GameObject {
        return GameEngine.engine && GameEngine.engine.gobjc().instanceCreate(x, y, sprite);
    }

    public static createSprite(linkage:string):Sprite {
        return GameEngine.engine && GameEngine.engine.rm().createSprite(linkage);
    }
}