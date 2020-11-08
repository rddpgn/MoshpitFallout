import { GameObject } from "../../gameObjects/GameObject";
import { IInputCallback } from "../IInputCallback";
import { IInputListener } from "../IInputListener";
import { IKeyState } from "../IKeyState";
import { InputController } from "../InputController";

export class KeyboardListener implements IInputListener {

    private clickListeners:Map<string, Set<IInputCallback>> = new Map<string, Set<IInputCallback>>();
    private pressingListeners:Map<string, Set<IInputCallback>> = new Map<string, Set<IInputCallback>>();
    private pressedListeners:Map<string, Set<IInputCallback>> = new Map<string, Set<IInputCallback>>();

    private keyStates:Map<string, IKeyState> = new Map<string, IKeyState>();

    constructor() {
        addEventListener('keydown', (e) => this.onButtonClickUpdate.call(this, e));
        addEventListener('keyup', (e) => this.onButtonPressedUpdate.call(this, e));
    }

    public update():void {
        this.onButtonPressingUpdate();
    }

    private executeCallbacks(callbacksSet:Set<IInputCallback>):void {
        callbacksSet.forEach((callbackObj:IInputCallback) => {
            if (callbackObj.context) {
                callbackObj.callback.call(callbackObj.context);
            } else {
                callbacksSet.delete(callbackObj);
            }
        });
    }

    public onButtonClick(button:string, context:GameObject, callback:() => void):void {
        if (!this.keyStates.get(button)) {
            this.keyStates.set(button, {
                keyDown: false,
                keyUp: false,
            })
        }
        
        if (!this.clickListeners.get(button)) {
            this.clickListeners.set(button, new Set<IInputCallback>());
        }

        this.clickListeners.get(button).add({
            callback,
            context,
        });
    }

    private onButtonClickUpdate(e:KeyboardEvent) {
        let keyState:IKeyState = this.keyStates.get(e.code);
        if (keyState) {
            if (!keyState.keyDown && this.clickListeners.get(e.code)) {
                this.executeCallbacks(this.clickListeners.get(e.code));
            }
    
            keyState.keyDown = true;
            keyState.keyUp = false;
        }
    }
    
    public onButtonPressing(button:string, context:GameObject, callback:() => void):void {
        if (!this.pressingListeners.get(button)) {
            this.pressingListeners.set(button, new Set<IInputCallback>());
        }

        this.pressingListeners.get(button).add({
            callback,
            context,
        });
    }

    private onButtonPressingUpdate():void {
        this.keyStates.forEach((keyState:IKeyState, key:string) => {
            if (keyState.keyDown && this.pressingListeners.get(key)) {
                this.executeCallbacks(this.pressingListeners.get(key));
            }
        });
    } 
    
    public onButtonPressed(button:string, context:GameObject, callback:() => void):void {
        if (!this.keyStates.get(button)) {
            this.keyStates.set(button, {
                keyDown: false,
                keyUp: false,
            })
        }

        if (!this.pressedListeners.get(button)) {
            this.pressedListeners.set(button, new Set<IInputCallback>());
        }

        this.pressedListeners.get(button).add({
            callback,
            context,
        });
    }

    private onButtonPressedUpdate(e:KeyboardEvent) {
        let keyState:IKeyState = this.keyStates.get(e.code);
        if (keyState) {
            if (!keyState.keyUp && this.pressedListeners.get(e.code)) {
                this.executeCallbacks(this.pressedListeners.get(e.code));
            }
    
            keyState.keyDown = false;
            keyState.keyUp = true;
        }
    }
}