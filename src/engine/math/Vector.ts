import { Point } from "./Point";

export class Vector extends Point {

    constructor(x:number = 0, y:number = 0) {
        super(x,y);
    }

    public expand(value:number):Vector {
        this.x * value;
        this.y * value;
        return this;
    }

    public lerp(vectorToLerp:Vector, lerpValue:number):Vector {
        if (lerpValue > 1) lerpValue = 1;

        let diff:Vector = Vector.diff(vectorToLerp, this);
        this.x += diff.x * lerpValue;
        this.y += diff.y * lerpValue;

        return this;
    }

    public static diff(vectorA:Vector, vectorB:Vector):Vector {
        let tmpVector = new Vector(vectorA.x - vectorB.x, vectorA.y - vectorB.y);
        return tmpVector;
    }

    public static expand(vector:Vector, value:number):Vector {
        let tmpVector = new Vector(vector.x * value, vector.y * value);
        return tmpVector;
    }


}