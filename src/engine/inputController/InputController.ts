import { GameObject } from "../gameObjects/GameObject";
import { IInputListener } from "./IInputListener";
import { KeyboardListener } from "./listeners/KeyboardListener";

export class InputController {
    private keyboardListener:IInputListener;
    private mouseListener:IInputListener;
    private gamepadListener:IInputListener;

    constructor() {
        this.keyboardListener = new KeyboardListener();
    }

    public update():void {
        this.keyboardListener.update();
    }

    public onKeyboardButtonClick(button:string, gameObject:GameObject, callback:() => void):void {
        this.keyboardListener.onButtonClick(button, gameObject, callback);
    }
    
    public onKeyboardButtonPressing(button:string, gameObject:GameObject, callback:() => void):void {
        this.keyboardListener.onButtonPressing(button, gameObject, callback);
    }
    
    public onKeyboardButtonPressed(button:string, gameObject:GameObject, callback:() => void):void {
        this.keyboardListener.onButtonPressed(button, gameObject, callback);
    }
}