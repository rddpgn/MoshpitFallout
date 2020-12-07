import { Vector } from "../../../../engine/math/Vector";
import {State} from "../../../utils/state_machine/State";
import {StateController} from "../../../utils/state_machine/StateController";
import {CollisionController} from "../../../../engine/physics/CollisionController";
import { Point } from "../../../../engine/math/Point";
import {Line} from "../../../../engine/math/Line";
import { InputController } from "../../../../engine/inputController/InputController";
import { GameEngine } from "../../../../engine/GameEngine";

export class MovementState extends State {

    public accelerationVector:Vector;

    protected collisionController:CollisionController;
    protected inputController:InputController;
    protected gameObjectPosition:Point;

    constructor(name:string, controller:StateController, gameObjectPosition:Point) {
        super(name, controller);

        this.accelerationVector = new Vector(0,0);
        this.gameObjectPosition = gameObjectPosition;
        this.collisionController = CollisionController.getCollisionController();
        this.inputController = GameEngine.getInputController();
    }

    //TODO магическое число 16 заменить на вычисляемое значение относительно размеров, либо устанавливать в качестве параметра
    protected getLineToCheckWalls():Line {
        return new Line(this.gameObjectPosition.addFrom(0,16), this.gameObjectPosition.addFrom(0, 32));
    }

    switchedIn(from: MovementState) {
        this.accelerationVector = from.accelerationVector;
    }

    //override to
    public update():void { }
}