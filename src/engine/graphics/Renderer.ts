import { GameEngine } from "../GameEngine";
import { GameEngineController } from "../GameEngineController";
import { GameObject } from "../gameObjects/GameObject";
import { Circle } from "../math/Circle";
import { Line } from "../math/Line";
import { Polygon } from "../math/Polygon";
import { ResourceManager } from "../resourceManager/ResourceManager";

export class Renderer {

    private ctx:CanvasRenderingContext2D;
    private canvas:HTMLCanvasElement;

    private linesToRender:Set<Line> = new Set<Line>();
    private circlesToRender:Set<Circle> = new Set<Circle>();
    private polygonesToRender:Set<Polygon> = new Set<Polygon>();

    private lines:Array<Line> = new Array<Line>();

    constructor(canvas:HTMLCanvasElement, ctx:CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.ctx.scale(1.5,1.5);
        this.ctx.imageSmoothingEnabled = false;
    }

    public addLine(line:Line):void {
        this.linesToRender.add(line);
    }

    public addCircle(circle:Circle):void {
        this.circlesToRender.add(circle);
    }

    public addPoly(polygon:Polygon):void {
        this.polygonesToRender.add(polygon);
    }

    private renderLine(line:Line):void {
        this.ctx.beginPath();
        this.ctx.moveTo(line.lineStart.x, line.lineStart.y);
        this.ctx.lineTo(line.lineEnd.x, line.lineEnd.y);
        this.ctx.stroke();  
    }

    public drawLineOnce(line:Line):void {
        this.lines.push(line);
    }

    public renderGameObjects(gameObjects:Set<GameObject>):void {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

        gameObjects.forEach((obj:GameObject) => {
            if (obj.sprite) {
                this.ctx.drawImage(obj.sprite.image, obj.position.x + obj.sprite.pivot.x, obj.position.y + obj.sprite.pivot.y);
            }
        });

        this.linesToRender.forEach((line:Line) => {
            if (line) {
                this.renderLine(line);
            } else {
                this.linesToRender.delete(line);
            }
        });

        this.polygonesToRender.forEach((polygon:Polygon) => {
            if (polygon) {
                polygon.relativeForm.forEach((line) => this.renderLine(line));
            } else {
                this.polygonesToRender.delete(polygon);
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

        this.lines.forEach((line) => this.renderLine(line));
        this.lines.length = 0;
    }
}