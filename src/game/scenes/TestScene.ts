import { Scene } from "../../engine/sceneManager/Scene";
import { Player } from "../prefabs/player/Player";
import { Wall } from "../prefabs/wall/Wall";

export class TestScene extends Scene {

    public init():void {
        new Wall(0,0);
        new Player(640,200);
    }
}