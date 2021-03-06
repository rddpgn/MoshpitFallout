import { GameEngine } from "../GameEngine";
import { GameEngineController } from "../GameEngineController";
import { GameObject } from "../gameObjects/GameObject";
import { Circle } from "../math/Circle";
import { Line } from "../math/Line";
import { ResourceManager } from "../resourceManager/ResourceManager";

export class Renderer {

    private ctx:CanvasRenderingContext2D;
    private canvas:HTMLCanvasElement;

    private linesToRender:Set<Line> = new Set<Line>();
    private circlesToRender:Set<Circle> = new Set<Circle>();

    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.canvas = canvas;
    }

    public addLine(line:Line):void {
        this.linesToRender.add(line);
    }

    public addCircle(circle:Circle):void {
        this.circlesToRender.add(circle);
    }

    public renderGameObjects(gameObjects:Set<GameObject>):void {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        gameObjects.forEach((obj:GameObject) => {
            if (obj.sprite) {
                this.ctx.drawImage(obj.sprite.image, obj.x, obj.y);
            }
        });

        this.linesToRender.forEach((line:Line) => {
            if (line) {
                this.ctx.beginPath();
                this.ctx.moveTo(line.lineStart.x, line.lineStart.y);
                this.ctx.lineTo(line.lineEnd.x, line.lineEnd.y);
                this.ctx.stroke();  
            } else {
                this.linesToRender.delete(line);
            }
        });

        this.circlesToRender.forEach((circle:Circle) => {
            if (circle) {
                this.ctx.beginPath();
                this.ctx.arc(circle.center.x, circle.center.y, circle.radius, 0, 2 * Math.PI);
                this.ctx.fill();
            } else {
                this.circlesToRender.delete(circle);
            }
        });
    }
}