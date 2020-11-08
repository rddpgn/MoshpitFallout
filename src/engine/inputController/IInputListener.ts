import { GameObject } from "../gameObjects/GameObject";
import { GameObjectsController } from "../gameObjects/GameObjectsController";

export interface IInputListener {
    onButtonClick(button:string, gameObject:GameObject, callback:() => void):void;
    onButtonPressing(button:string, gameObject:GameObject, callback:() => void):void;
    onButtonPressed(button:string, gameObject:GameObject, callback:() => void):void;
    update():void;
}