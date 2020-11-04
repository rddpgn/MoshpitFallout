import { GameConfig } from "../../../rdengine.config";
import { Sprite } from "../graphics/Sprite";
import { ImageResourceLoader } from "./ImageResourceLoader";

export class ResourceManager {
    
    private static instance:ResourceManager;
    private resourcesBitmap:Map<String, ImageBitmap> = new Map<String, ImageBitmap>();
    private onLoadedCallback:Function;

    constructor(onLoadedCallback:Function) {
        ResourceManager.instance = this;
        this.onLoadedCallback = onLoadedCallback;
        new ImageResourceLoader(this.onAllTexturesLoaded.bind(this));
    }

    private onAllTexturesLoaded(loadedTextures:Array<object>):void {
        for(let resource of loadedTextures) {
            this.makeBitmaps(resource);
        }
    }

    private makeBitmaps(resource:object):void {
        let resourceData:object = resource['json'];
        let resourceDataFrames:object = resourceData['frames'];
        let image:HTMLImageElement = resource['img'];

        for(let frame in resourceDataFrames) {
            let data = resourceDataFrames[frame];
            let dataFrame = data['frame'];

            createImageBitmap(image, dataFrame['x'], dataFrame['y'], dataFrame['w'], dataFrame['h'])
            .then((imageBitmap:ImageBitmap) => {
                this.resourcesBitmap.set(frame = frame.replace('"', ''), imageBitmap);
            });
        }

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
    
    public getImageFromResource(imageName:String):ImageBitmap {
        return this.resourcesBitmap.get(imageName);
    }
    
}

/*

*/