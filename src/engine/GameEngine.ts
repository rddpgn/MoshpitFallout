export class GameEngine {
    private static instance:GameEngine;
    private ctx:CanvasRenderingContext2D;

    private constructor(ctx:CanvasRenderingContext2D) {
        GameEngine.instance = this;
        this.ctx = ctx;
        
        this.drawSmth();
    }

    public static start(ctx:CanvasRenderingContext2D) {
        if (GameEngine.instance == undefined) {
            GameEngine.instance = new GameEngine(ctx);
        }
    }

    public static getInstance():GameEngine {
        return this.instance;
    }

    private drawSmth():void {
        this.ctx.rect(10,10,200,200);
        this.ctx.fill();
    }
}