import { GameEngine } from "../../engine/GameEngine";
import { GameEngineController } from "../../engine/GameEngineController";
import { GameObject } from "../../engine/gameObjects/GameObject";
import { Scene } from "../../engine/sceneManager/Scene";

export class TestScene extends Scene {
    public init():void {
        let player = new GameObject(0,0, GameEngine.createSprite('14236622769995'));
        let inputController = GameEngine.getInputController();

        inputController.onKeyboardButtonClick('KeyW', player, () => console.log('Ммм, WWWW'));
        inputController.onKeyboardButtonPressing('KeyW', player, () => console.log('оаоаооаооа, WWWW'));
        inputController.onKeyboardButtonPressed('KeyW', player, () => console.log('ыароыоораоыа, WWWW'));
    }
}