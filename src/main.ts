import { GameEngine } from './engine/GameEngine';
import { GameConfig } from '../rdengine.config';
import { GameObject } from './engine/gameObjects/GameObject';

const startGame:Function = function():void {
    const gameCanvas:HTMLCanvasElement = document.getElementById(GameConfig.canvasConfig['canvasId']) as HTMLCanvasElement;
    gameCanvas.width = GameConfig.canvasConfig['canvasWidth'];
    gameCanvas.height = GameConfig.canvasConfig['canvasHeight'];

    GameEngine.start(gameCanvas, GameConfig, function() {
        console.log('GameStarted');
        setTimeout(() => {
            let player:GameObject = GameEngine.instanceCreate(32, 32, GameEngine.createSprite('14589235.jpg'));
        }, 1000);
    });
}

startGame();