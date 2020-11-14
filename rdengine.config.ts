export class GameConfig {
    public static imageResources:Array<object> = [
        { 
            src: './src/game/assets/graphics/player.png',
            json: require('./src/game/assets/graphics/player.json'),
        }
    ]
    public static canvasConfig:object = {
        canvasId: 'game-canvas',
        canvasWidth: document.body.clientWidth,
        canvasHeight: document.body.clientHeight,
    }
}