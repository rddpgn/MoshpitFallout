import { GameEngine } from "./GameEngine"

export class GameEngineFacade {
    
    private static engine:GameEngine;

    constructor(engine:GameEngine) {
        GameEngineFacade.engine = engine;
    }
    
    public static getCanvasWidth():number {
        return this.engine.getCanvasWidth();
    }

    public static getCanvasHeight():number {
        return this.engine.getCanvasHeight();
    }
}