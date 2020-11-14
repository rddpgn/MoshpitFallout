import { Point } from "../math/Point";

export class Sprite {
    
    public readonly image:ImageBitmap;
    public pivot:Point = new Point();

    //TODO - Переделать как в геймобжекте, чтобы не дергать менеджер ресурсов

    constructor(image:ImageBitmap) {
        this.image = image;
    }

    public update():void {

    }
}