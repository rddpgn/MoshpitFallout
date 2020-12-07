import { State } from "./State";

export class StateController {

    private allStates:Array<State>;
    private currentState:State;

    constructor() {
        this.allStates = new Array<State>();
    }

    public setInitialState(state:State):void {
        if (!this.currentState) {
            this.currentState = state;
        }
    }

    public addState(state:State, initial:boolean = false):void {
        this.allStates.push(state);

        if (initial) {
            this.setInitialState(state);
        }
    }

    public removeState(stateToRemove:State):void {
        this.allStates = this.allStates.filter((state:State) => state.name != stateToRemove.name || state == stateToRemove);
    }

    public switchState(from:State, to:string):void {
       const stateToFound = this.allStates.filter((state:State) => state.name == to)[0];

       if (stateToFound) {
           this.currentState = stateToFound;
           stateToFound.switchedIn(from);
       }
    }

    public getCurrentState():State {
        return this.currentState;
    }
}