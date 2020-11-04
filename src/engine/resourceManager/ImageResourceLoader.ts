import { GameConfig } from "../../../rdengine.config";

export class ImageResourceLoader {
    
    private resourcesGraphics:Array<object> = GameConfig.imageResources;
    private loadedTextures:Array<object> = new Array<object>();
    private resourcesLoadedCallback:Function;
    
    constructor(resourcesLoadedCallback:Function) {
        this.resourcesLoadedCallback = resourcesLoadedCallback;
        this.prepareGraphics();
    }

    private prepareGraphics():void {
        let resourceQuantity:number = this.resourcesGraphics.length;

        for(let resource of this.resourcesGraphics) {
            let img = new Image();
            let json = resource['json'];

            img.src = resource['src'];
            img.onload = () => { 
                this.loadedTextures.push({
                    img,
                    json
                });

                resourceQuantity--;

                if (resourceQuantity == 0) {
                    this.resourcesLoadedCallback(this.loadedTextures);
                }
            }
        }
    }
}

/*
Возможно переписать на дженерики
вынести onloadcallback
именование поправить
*/