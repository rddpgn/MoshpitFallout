import { GameEngine } from './engine/GameEngine';
import { GameConfig } from '../rdengine.config';
import { GameObject } from './engine/gameObjects/GameObject';
import { TestScene } from './game/scenes/TestScene';

const startGame:Function = function():void {
    const gameCanvas:HTMLCanvasElement = document.getElementById(GameConfig.canvasConfig['canvasId']) as HTMLCanvasElement;
    gameCanvas.width = GameConfig.canvasConfig['canvasWidth'];
    gameCanvas.height = GameConfig.canvasConfig['canvasHeight'];

    GameEngine.start(gameCanvas, GameConfig, function() {
        GameEngine.addScene('TestScene', new TestScene());
        GameEngine.initScene('TestScene');
    });
}

startGame();

/*t

--Отображение загрузки
Сцена
Инпуты

*/