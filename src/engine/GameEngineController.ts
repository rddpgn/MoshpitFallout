import { GameConfig } from '../../rdengine.config';
import { GameEngine } from './GameEngine';
import { GameObjectsController } from './gameObjects/GameObjectsController';
import { Renderer } from './graphics/Renderer';
import { InputController } from './inputController/InputController';
import { ResourceManager } from './resourceManager/ResourceManager';
import { Scene } from './sceneManager/Scene';
import { SceneManager } from './sceneManager/SceneManager';

export class GameEngineController {    
    private canvas:HTMLCanvasElement;
    private renderer:Renderer;
    private resourseManager:ResourceManager;
    private gameObjectsController:GameObjectsController;
    private config:GameConfig;
    public readonly sceneManager:SceneManager;
    public readonly inputController:InputController;

    
    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D, config:GameConfig, onLoadedCallback:Function) {
        this.canvas = canvas;
        this.config = config;
        this.renderer = new Renderer(canvas, ctx);
        this.resourseManager = new ResourceManager(onLoadedCallback);
        this.gameObjectsController = new GameObjectsController();
        this.sceneManager = new SceneManager();
        this.inputController = new InputController();

        this.update();
    }

    private update():void {
        this.inputController.update();
        this.gameObjectsController.updateGameObjects(0);
        this.renderer.renderGameObjects(this.gameObjectsController.getGameObjectsSet());

        window.requestAnimationFrame(this.update.bind(this));
    }

    public getCanvasWidth():number {
        return this.canvas.width;
    }

    public getCanvasHeight():number {
        return this.canvas.height;
    }

    public rm():ResourceManager {
        return this.resourseManager;
    }

    public gobjc():GameObjectsController {
        return this.gameObjectsController;
    }
}