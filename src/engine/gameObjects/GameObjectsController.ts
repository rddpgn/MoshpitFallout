import { GameObject } from './GameObject';

export class GameObjectsController {

    private gameObjects:Set<GameObject> = new Set<GameObject>();

    constructor() {
        
    }

    public updateGameObjects():void {
        this.gameObjects.forEach(element => {
            element.update();
        });
    }

    public getGameObjectsSet():Set<GameObject> {
        return this.gameObjects;
    }
}