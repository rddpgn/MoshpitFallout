export class GameConfig {
    public static imageResources:Array<object> = [
        { 
            src: './src/game/assets/graphics/texture.png',
            json: require('./src/game/assets/graphics/texture.json'),
        }
    ]
    public static canvasConfig:object = {
        canvasId: 'game-canvas',
        canvasWidth: document.body.clientWidth,
        canvasHeight: document.body.clientHeight,
    }
}