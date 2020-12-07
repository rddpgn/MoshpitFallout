import { GameEngine } from "../../../../engine/GameEngine";
import {MovementState} from "./MovementState";

export class MovementStateJump extends MovementState {

    private gravity:number = 1;
    private maxVerticalSpeed:number = 12;

    switchedIn(from: MovementState) {
        super.switchedIn(from);

        this.inputController.onKeyboardButtonClick('KeyD', this, () => this.accelerationVector.x = 6);
        this.inputController.onKeyboardButtonClick('KeyA', this, () => this.accelerationVector.x = -6);

        this.inputController.onKeyboardButtonClick('KeyD', this, () => this.accelerationVector.x = 0);
        this.inputController.onKeyboardButtonClick('KeyA', this, () => this.accelerationVector.x = -6);
    }



    public update() {
        if (Math.abs(this.accelerationVector.y) < this.maxVerticalSpeed) {
            this.accelerationVector.add(0, this.gravity);
        }
    }
}