import {MovementState} from "./MovementState";
import {CollisionLayers} from "../../../utils/CollisionLayers";
import { Line } from "../../../../engine/math/Line";
import {Point} from "../../../../engine/math/Point";
import { GameEngine } from "../../../../engine/GameEngine";
import { MovementStates } from "./MovementStates";

export class MovementStateIdle extends MovementState {

    public update() {
        this.checkForWalls();
    }

    private checkForWalls() {
        const checkingLine:Line = this.getLineToCheckWalls();
        const wallCollisionPoints:Array<Point> = this.collisionController.onLineCollidesCollisionLayer(checkingLine, CollisionLayers.WALL);

        GameEngine.drawLineOnce(checkingLine);

        if (wallCollisionPoints.length > 0 && wallCollisionPoints[0]) {
            this.controller.switchState(this, MovementStates.RUN);
        } else {
            this.controller.switchState(this, MovementStates.JUMP);
        }
    }
}