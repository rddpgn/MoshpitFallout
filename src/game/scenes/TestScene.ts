import { Scene } from "../../engine/sceneManager/Scene";

export class TestScene extends Scene {
    public init():void {
        alert('inited');
    }
}