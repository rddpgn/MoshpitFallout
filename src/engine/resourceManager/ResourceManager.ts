import { GameConfig } from "../../../rdengine.config";
import { Sprite } from "../graphics/Sprite";
import { ImageResourceLoader } from "./ImageResourceLoader";

export class ResourceManager {
    
    private static instance:ResourceManager;
    private resourcesBitmap:Map<string, ImageBitmap> = new Map<string, ImageBitmap>();
    private onLoadedCallback:Function;

    constructor(onLoadedCallback:Function) {
        ResourceManager.instance = this;
        this.onLoadedCallback = onLoadedCallback;
        new ImageResourceLoader(this.onAllTexturesLoaded.bind(this), this.resourcesBitmap);
    }

    private onAllTexturesLoaded(loadedTextures:Array<object>):void {
        this.onLoadedCallback();
    }

    public createSprite(linkage:string):Sprite {
        let texture = this.resourcesBitmap.get(linkage);
        
        if (texture != null) {
            return new Sprite(texture);
        }
        return null;
    }

    public static getInstance():ResourceManager {
        return ResourceManager.instance;
    }
    
    public getImageFromResource(imageName:string):ImageBitmap {
        return this.resourcesBitmap.get(imageName);
    }
    
}

/*

*/