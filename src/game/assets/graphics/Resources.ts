export class Resources {
    public static readonly resources:Array<object> = [
        {
            name: 'texture',
            image: Resources.createImage('./src/game/assets/graphics/texture.png'),
            json: require('./texture.json'),
        }
    ];

    private static createImage(src:string):HTMLImageElement {
        let img = new Image();
        img.src = src;
        return img;
    }
}