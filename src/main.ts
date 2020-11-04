import { GameEngine } from './engine/GameEngine';
import { GameConfig } from '../rdengine.config';

const startGame:Function = function():void {
    const gameCanvas:HTMLCanvasElement = document.getElementById(GameConfig.canvasConfig['canvasId']) as HTMLCanvasElement;
    gameCanvas.width = GameConfig.canvasConfig['canvasWidth'];
    gameCanvas.height = GameConfig.canvasConfig['canvasHeight'];

    GameEngine.start(gameCanvas, GameConfig);
}

startGame();