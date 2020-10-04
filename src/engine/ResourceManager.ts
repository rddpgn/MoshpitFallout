import { Resources } from '../game/assets/graphics/Resources';

export class ResourceManager {
    
    private static instance:ResourceManager;
    private pathToAssets:String = "../assets";
    private resources:Array<object> = new Array<object>();
    private resourcesBitmap:Map<String, ImageBitmap> = new Map<String, ImageBitmap>();

    constructor() {
        ResourceManager.instance = this;
        setTimeout(this.readResources.bind(this), 5000);
    }

    private readResources():void {
        /*
        let frames:object = texture.frames;

        for (let frame in frames) {
            let resource:object = frames[frame];
            resource['name'] = frame;
            this.resources.push(resource);
        }*/
        let _this = this;

        for(let resource of Resources.resources) {
            let resourceData:object = resource['json'];
            let resourceDataFrames:object = resourceData['frames'];
            let image:HTMLImageElement = resource['image'];

            for(let frame in resourceDataFrames) {
                let data = resourceDataFrames[frame];
                let dataFrame = data['frame'];

                createImageBitmap(image, dataFrame['x'], dataFrame['y'], dataFrame['w'], dataFrame['h'])
                .then(function(imageBitmap:ImageBitmap) {
                    _this.resourcesBitmap.set(frame = frame.replace('"', ''), imageBitmap);
                });
            }
        }

        
        console.log(this.resourcesBitmap);
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