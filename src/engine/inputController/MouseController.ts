import { Point } from "../math/Point";

export class MouseController {

    public readonly mousePosition:Point = new Point();

    constructor() {
        document.addEventListener('mousemove', (event:MouseEvent) => {
            this.mousePosition.x = event.clientX;
            this.mousePosition.y = event.clientY;
        }); 
    }

}