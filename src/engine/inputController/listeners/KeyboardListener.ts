import { InputListener as InputListener } from "../InputListener";
import { IKeyState } from "../IKeyState";

export class KeyboardListener extends InputListener {

    constructor() {
        super();
        addEventListener('keydown', (e) => this.onButtonClickUpdate.call(this, e));
        addEventListener('keyup', (e) => this.onButtonPressedUpdate.call(this, e));
    }

    public update():void {
        this.onButtonPressingUpdate();
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

    private onButtonPressingUpdate():void {
        this.keyStates.forEach((keyState:IKeyState, key:string) => {
            if (keyState.keyDown && this.pressingListeners.get(key)) {
                this.executeCallbacks(this.pressingListeners.get(key));
            }
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