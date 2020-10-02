import { Resource } from '../assets/graphics/Resource';

const texture = require('../assets/graphics/texture.json');

export class ResourceManager {
    
    private static instance:ResourceManager;
    private pathToAssets:String = "../assets";
    private resources:Map<String, object>

    constructor() {
        ResourceManager.instance = this;
        this.readResources();
    }

    private readResources():void {
        console.log(texture);
    }

    public getInstance():ResourceManager {
        return ResourceManager.instance;
    }

    /*
    public getImageFromResource(imageName:String):ImageBitmap {
        
    }*/
}