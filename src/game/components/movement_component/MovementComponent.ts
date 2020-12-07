import { GameObject } from "../../../engine/gameObjects/GameObject";
import { StateController } from "../../utils/state_machine/StateController";
import {MovementState} from "./movement_states/MovementState";
import {GameObjectComponent} from "../../../engine/gameObjects/GameObjectComponent";
import {MovementStateIdle} from "./movement_states/MovementStateIdle";
import {MovementStates} from "./movement_states/MovementStates";
import {MovementStateJump} from "./movement_states/MovementStateJump";

export class MovementComponent extends GameObjectComponent{

    public readonly stateController:StateController;

    constructor(gameObject:GameObject) {
        super(gameObject);
        this.stateController = new StateController();
        this.initStates();
    }

    private initStates():void {
        this.stateController.addState(new MovementStateIdle(MovementStates.IDLE, this.stateController, this.gameObject.position), true);

        //TODO стейты ран и жамп очень похожи, поэтому лучше их объеденить в один
        //Константы и триггеры должны идти извне
        this.stateController.addState(new MovementStateJump(MovementStates.JUMP, this.stateController, this.gameObject.position));
    }

    public update():void {
        const currentMovementState:MovementState = this.stateController.getCurrentState() as MovementState;
        currentMovementState.update();
        this.gameObject.position.add(currentMovementState.accelerationVector.x, currentMovementState.accelerationVector.y);
    }
}