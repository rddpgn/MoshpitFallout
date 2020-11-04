import { GameConfig } from "../../../rdengine.config";
import { ImageResourceLoader } from "./ImageResourceLoader";

export class ResourceManager {
    
    private static instance:ResourceManager;
    private resourcesBitmap:Map<String, ImageBitmap> = new Map<String, ImageBitmap>();

    constructor() {
        ResourceManager.instance = this;
        new ImageResourceLoader(this.onAllTexturesLoaded.bind(this));
    }

    private onAllTexturesLoaded(loadedTextures:Array<object>):void {
        for(let resource of loadedTextures) {
            this.makeSprite(resource);
        }
    }

    private makeSprite(resource:object):void {
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
    }

    public static getInstance():ResourceManager {
        return ResourceManager.instance;
    }
    
    public getImageFromResource(imageName:String):ImageBitmap {
        return this.resourcesBitmap.get(imageName);
    }
    
}

/*
    Отдельный файл конфигурации, где хранятся ссылки на ресурсы
    Прогоняем по джсончикам ресурсов, создаем массив всех ресурсов
    Относительно ресурсов создаем мапу с именем картинки и имейджбитмапой
    Когда прогоняем ресурсы, создаем имейдж битмапы
    Вся эта хуйня еще и через промисы работает
*/