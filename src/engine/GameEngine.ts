import { GameConfig } from "../../rdengine.config";
import { GameEngineController } from "./GameEngineController";
import { GameObject } from "./gameObjects/GameObject";
import { GameObjectsController } from "./gameObjects/GameObjectsController";
import { Sprite } from "./graphics/Sprite";
import { InputController } from "./inputController/InputController";
import { Circle } from "./math/Circle";
import { Line } from "./math/Line";
import { Polygon } from "./math/Polygon";
import { ResourceManager } from "./resourceManager/ResourceManager";
import { Scene } from "./sceneManager/Scene";

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

    public static createSprite(linkage:string):Sprite {
        return GameEngine.engine && GameEngine.engine.rm().createSprite(linkage);
    }

    public static saveInstance(instance:GameObject):void {
        GameEngine.engine && GameEngine.engine.gobjc().saveInstance(instance);
    }

    public static addScene(sceneName:string, scene:Scene):void {
        GameEngine.engine && GameEngine.engine.sceneManager.addScene(sceneName, scene);
    }

    public static initScene(sceneName:string):void {
        GameEngine.engine && GameEngine.engine.sceneManager.initScene(sceneName);
    }

    public static getInputController():InputController {
        return GameEngine.engine && GameEngine.engine.inputController;
    }

    public static drawLine(line:Line):void {
        GameEngine.engine && GameEngine.engine.renderer.addLine(line);
    }

    public static drawPolygon(polygon:Polygon):void {
        if (GameEngine) {
            polygon.relativeForm.forEach((line:Line) => GameEngine.drawLine(line));
        }
    }

    public static drawCircle(circle:Circle):void {
        GameEngine.engine && GameEngine.engine.renderer.addCircle(circle);
    }
}