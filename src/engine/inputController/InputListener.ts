import { IInputCallback } from "./IInputCallback";
import { IKeyState } from "./IKeyState";

export class InputListener {

    protected clickListeners:Map<string, Set<IInputCallback>> = new Map<string, Set<IInputCallback>>();
    protected pressingListeners:Map<string, Set<IInputCallback>> = new Map<string, Set<IInputCallback>>();
    protected pressedListeners:Map<string, Set<IInputCallback>> = new Map<string, Set<IInputCallback>>();
    protected keyStates:Map<string, IKeyState> = new Map<string, IKeyState>();

    constructor() {

    }

    public onButtonClick(button:string, context:object, callback:() => void):void {
        this.setKeyState(button, false, false);
        
        if (!this.clickListeners.get(button)) {
            this.clickListeners.set(button, new Set<IInputCallback>());
        }

        this.clickListeners.get(button).add({
            callback,
            context,
        });
    }

    public onButtonPressing(button:string, context:object, callback:() => void):void {
        if (!this.pressingListeners.get(button)) {
            this.pressingListeners.set(button, new Set<IInputCallback>());
        }

        this.pressingListeners.get(button).add({
            callback,
            context,
        });
    }

    public onButtonPressed(button:string, context:object, callback:() => void):void {
        this.setKeyState(button, false, false);

        if (!this.pressedListeners.get(button)) {
            this.pressedListeners.set(button, new Set<IInputCallback>());
        }

        this.pressedListeners.get(button).add({
            callback,
            context,
        });
    }

    public update():void {

    }

    protected setKeyState(button:string, keyDownState:boolean, keyUpState:boolean):void {
        if (!this.keyStates.get(button)) {
            this.keyStates.set(button, {
                keyDown: keyDownState,
                keyUp: keyUpState,
            })
        }
    }

    protected executeCallbacks(callbacksSet:Set<IInputCallback>):void {
        callbacksSet.forEach((callbackObj:IInputCallback) => {
            if (callbackObj.context) {
                callbackObj.callback.call(callbackObj.context);
            } else {
                callbacksSet.delete(callbackObj);
            }
        });
    }
}