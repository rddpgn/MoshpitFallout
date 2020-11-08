import { GameConfig } from "../../../rdengine.config";

export class ImageResourceLoader {
    

    private resourceStorage:Map<string, ImageBitmap>;
    private resourcesLoadedCallback:Function;
    
    constructor(resourcesLoadedCallback:Function, resourceStorage:Map<string, ImageBitmap>) {
        this.resourcesLoadedCallback = resourcesLoadedCallback;
        this.resourceStorage = resourceStorage;
        this.prepareGraphics();
    }

    private prepareGraphics():void {
        let resourcesGraphics:Array<object> = GameConfig.imageResources;
        for(let resource of resourcesGraphics) {
            this.createImage(resource)
                .then(this.createBitmap)
                .then(this.saveBitmaps.bind(this))
                .then(this.resourcesLoadedCallback.bind(this));
        }
    }

    private createImage(resource:object):Promise<object> {
        return new Promise((resolve, reject) => {
            let img = new Image();
            let json = resource['json'];

            img.src = resource['src'];
            img.onload = () => {
                resolve({
                    img,
                    json
                }); 
            }
        });
    }

    private createBitmap(imageResource:object):Promise<any> {
        let resourceData:object = imageResource['json'];
        let resourceDataFrames:object = resourceData['frames'];
        let image:HTMLImageElement = imageResource['img'];
        let pendingPromises:Array<Promise<any>> = new Array<Promise<any>>();

        for(let frame in resourceDataFrames) {
            let data = resourceDataFrames[frame];
            let dataFrame = data['frame'];
            let createImageBitmapPromise = new Promise((resolve, reject) => {
                createImageBitmap(image, dataFrame['x'], dataFrame['y'], dataFrame['w'], dataFrame['h'])
                .then((imageBitmap) => resolve({ 
                    frame: frame.replace('"', '').replace('.jpg', ''), 
                    imageBitmap
                }));
            });
            
            pendingPromises.push(createImageBitmapPromise);
        }

        return Promise.all<any>(pendingPromises);
    }

    private saveBitmaps(images:Array<object>):void {
        for(let image of images) {
            this.resourceStorage.set(image['frame'], image['imageBitmap']);
        }
        console.log(this.resourceStorage);
    }
}

/*
Возможно переписать на дженерики
вынести onloadcallback
именование поправить
*/