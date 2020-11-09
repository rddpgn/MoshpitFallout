import { GameObject } from "../gameObjects/GameObject";
import { InputListener } from "./InputListener";
import { KeyboardListener } from "./listeners/KeyboardListener";

export class InputController {
    private keyboardListener:InputListener;
    private mouseListener:InputListener;
    private gamepadListener:InputListener;

    constructor() {
        this.keyboardListener = new KeyboardListener();
    }

    public update():void {
        this.keyboardListener.update();
    }

    public onKeyboardButtonClick(button:string, gameObject:object, callback:() => void):void {
        this.keyboardListener.onButtonClick(button, gameObject, callback);
    }
    
    public onKeyboardButtonPressing(button:string, gameObject:object, callback:() => void):void {
        this.keyboardListener.onButtonPressing(button, gameObject, callback);
    }
    
    public onKeyboardButtonPressed(button:string, gameObject:object, callback:() => void):void {
        this.keyboardListener.onButtonPressed(button, gameObject, callback);
    }
}