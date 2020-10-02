import { GameEngineFacade } from './GameEngineFacade';
import { GameObjectsController } from './gameObjects/GameObjectsController';
import { Renderer } from './Renderer';

export class GameEngine {
    private static instance:GameEngine;
    
    private canvas:HTMLCanvasElement;
    private gameObjectsController:GameObjectsController;
    private renderer:Renderer;
    
    
    private constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
        GameEngine.instance = this;
        new GameEngineFacade(this);

        this.canvas = canvas;

        this.gameObjectsController = new GameObjectsController();
        this.renderer = new Renderer(ctx);

        this.update();
    }

    public static start(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D):void {
        if (this.instance == undefined) {
            this.instance = new GameEngine(canvas, ctx);
        }
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
}