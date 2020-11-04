import { Sprite } from '../graphics/Sprite';
import { GameObject } from './GameObject';

export class GameObjectsController {

    private gameObjects:Set<GameObject> = new Set<GameObject>();

    constructor() {
        
    }

    public instanceCreate(x:number, y:number, sprite:Sprite):GameObject {
        let obj = new GameObject(x, y, sprite);
        this.gameObjects.add(obj);
        return obj;
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