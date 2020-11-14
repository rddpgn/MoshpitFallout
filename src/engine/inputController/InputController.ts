import { GameObject } from "../gameObjects/GameObject";
import { Point } from "../math/Point";
import { InputListener } from "./InputListener";
import { KeyboardListener } from "./listeners/KeyboardListener";
import { MouseController } from "./MouseController";

export class InputController {
    //TODO - переделать в контроллеры


    private keyboardListener:InputListener;
    private mouseListener:InputListener;
    private gamepadListener:InputListener;

    private mouseController:MouseController;

    constructor() {
        this.keyboardListener = new KeyboardListener();
        this.mouseController = new MouseController();
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

    public getMousePosition():Point {
        return this.mouseController.mousePosition;
    }
}