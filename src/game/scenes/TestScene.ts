import { GameEngine } from "../../engine/GameEngine";
import { GameEngineController } from "../../engine/GameEngineController";
import { GameObject } from "../../engine/gameObjects/GameObject";
import { Scene } from "../../engine/sceneManager/Scene";

export class TestScene extends Scene {
    public init():void {
        let player = new GameObject(0,0, GameEngine.createSprite('14236622769995'));
        let inputController = GameEngine.getInputController();

        inputController.onKeyboardButtonPressing('KeyW', player, () => player.y -= 5);
        inputController.onKeyboardButtonPressing('KeyA', player, () => player.x -= 5);
        inputController.onKeyboardButtonPressing('KeyS', player, () => player.y += 5);
        inputController.onKeyboardButtonPressing('KeyD', player, () => player.x += 5);
    }
}