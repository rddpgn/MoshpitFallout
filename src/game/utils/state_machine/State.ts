import { StateController } from "./StateController";

export class State {
    public readonly name:string;
    protected controller:StateController;

    constructor(name:string, controller:StateController) {
        this.name = name;
        this.controller = controller;
    }

    public switchedIn(from:State):void { }
}