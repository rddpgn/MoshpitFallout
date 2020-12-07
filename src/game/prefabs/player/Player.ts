import { GameEngine } from "../../../engine/GameEngine";
import { GameObject } from "../../../engine/gameObjects/GameObject";
import { Sprite } from "../../../engine/graphics/Sprite";
import {MovementComponent} from "../../components/movement_component/MovementComponent";
import {CollisionLayers} from "../../utils/CollisionLayers";

export class Player extends GameObject {

    public sprite:Sprite = GameEngine.createSprite('player_idle');

    constructor(x:number, y:number) {
        super(x,y);
        this.collisionLayer = CollisionLayers.PLAYER;
        this.components.push(new MovementComponent(this));
    }
}