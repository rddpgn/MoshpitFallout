import { GameConfig } from '../../rdengine.config';
import { GameEngine } from './GameEngine';
import { GameObjectsController } from './gameObjects/GameObjectsController';
import { Renderer } from './graphics/Renderer';
import { ResourceManager } from './resourceManager/ResourceManager';

export class GameEngineController {    
    private canvas:HTMLCanvasElement;
    private renderer:Renderer;
    private resourseManager:ResourceManager;
    private gameObjectsController:GameObjectsController;
    private config:GameConfig;
    
    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D, config:GameConfig) {
        this.canvas = canvas;
        this.config = config;
        this.renderer = new Renderer(canvas, ctx);
        this.resourseManager = new ResourceManager();
        this.gameObjectsController = new GameObjectsController();


        this.update();
    }

    private update():void {
        this.gameObjectsController.updateGameObjects();
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
}