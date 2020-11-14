import { GameEngine } from "../../engine/GameEngine";
import { GameEngineController } from "../../engine/GameEngineController";
import { GameObject } from "../../engine/gameObjects/GameObject";
import { Sprite } from "../../engine/graphics/Sprite";
import { Circle } from "../../engine/math/Circle";
import { Line } from "../../engine/math/Line";
import { Point } from "../../engine/math/Point";
import { Polygon } from "../../engine/math/Polygon";
import { Vector } from "../../engine/math/Vector";
import { CollisionsProcessor } from "../../engine/physics/CollisionsProcessor";

export class Player extends GameObject {

    public sprite:Sprite = GameEngine.createSprite('player_idle');

    private wall:Polygon;
    private collisionMask:Polygon;

    private idealX:number = 0;
    private idealY:number = 0;
    private realVector:Vector = new Vector();

    private maxSpeed:number = 12;
    private movementAcc:number = 1;

    private gravityConst:number =  2;
    private gravity:number;

    private onAWall:boolean = false;

    constructor(x:number, y:number, wall:Polygon) {
        super(x,y);
        this.initCollisionMask();
        this.initControls();
        this.sprite.pivot = new Point(-10,-16);
        this.wall = wall;

        this.gravity = this.gravityConst;
    }

    private initControls():void {
        GameEngine.getInputController().onKeyboardButtonClick('KeyD', this, () => {
            this.idealX = 1;
        });
        GameEngine.getInputController().onKeyboardButtonPressed('KeyD', this, () => {
            if (this.idealX > 0) this.idealX -= 1;
        });
        GameEngine.getInputController().onKeyboardButtonClick('KeyA', this, () => {
            this.idealX = -1;
        });
        GameEngine.getInputController().onKeyboardButtonPressed('KeyA', this, () => {
            if (this.idealX < 0) this.idealX += 1;
        });
        GameEngine.getInputController().onKeyboardButtonClick('KeyW', this, () => {
            if (this.gravity == 0) {
                this.idealY -= 24;
                this.gravity = 2;
                this.onAWall = false;
            }
        });
    }


    //TODO почить дт
    public update(dt:number):void {
        this.realVector.x = (this.idealX * this.maxSpeed + this.realVector.x) * 0.4;

        if (this.gravity != 0) {
            this.idealY += this.gravity * 0.4;
            this.gravity *= 1.001;
        }

        this.checkWallCollision();

        this.realVector.y = (this.idealY + this.realVector.y) * 0.4;

        this.position.x += this.realVector.x;
        this.position.y += this.realVector.y;

        //GameEngine.drawLineOnce(new Line(this.position, new Point(this.position.x + this.realVector.x, this.position.y + this.realVector.y)));
    }

    private checkWallCollision():void {
        if (!this.onAWall) {
            let position = new Point(this.position.x, this.position.y);
            let collision = CollisionsProcessor.onLineCollidesPolygon(new Line(position, new Point(position.x, position.y + this.idealY)), this.wall);

            if (collision) {
                this.position.y = collision.y - 16;
                this.realVector.y = 0;
                this.idealY = 0;
                this.gravity = 0;
                this.onAWall = true;
            }
        } else {
            let position = new Point(this.position.x, this.position.y + 16);
            let collision = CollisionsProcessor.onLineCollidesPolygon(new Line(position, new Point(position.x, position.y + 2)), this.wall);

            if (!collision) {
                this.onAWall = false;
                this.gravity = 2;
            }
        }
    }

    private initCollisionMask():void {
        this.collisionMask = new Polygon(this.position);
        this.collisionMask.start(new Line(new Point(0, -16), new Point(16, 0)))
            .addEdge(new Point(0, 16))
            .addEdge(new Point(-16, 0))
            .finish();
    }

}