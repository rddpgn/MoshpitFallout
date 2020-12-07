import { GameObject } from "./GameObject";

export class GameObjectComponent {
    
    protected gameObject:GameObject;

    constructor(gameObject:GameObject) {
        this.gameObject = gameObject;
    }

    public update():void {
        
    }
}