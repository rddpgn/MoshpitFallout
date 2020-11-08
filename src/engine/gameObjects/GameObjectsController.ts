import { Sprite } from '../graphics/Sprite';
import { GameObject } from './GameObject';

export class GameObjectsController {

    private gameObjects:Set<GameObject> = new Set<GameObject>();

    constructor() {
        
    }

    //Вынести в конструктор GameObject
    public saveInstance(instance:GameObject):void {
        this.gameObjects.add(instance);
    }

    public updateGameObjects(dt:number):void {
        this.gameObjects.forEach(element => {
            element.update(dt);
        });
    }

    public getGameObjectsSet():Set<GameObject> {
        return this.gameObjects;
    }
}