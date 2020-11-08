import { GameEngine } from './engine/GameEngine';
import { GameConfig } from '../rdengine.config';
import { GameObject } from './engine/gameObjects/GameObject';

const startGame:Function = function():void {
    const gameCanvas:HTMLCanvasElement = document.getElementById(GameConfig.canvasConfig['canvasId']) as HTMLCanvasElement;
    gameCanvas.width = GameConfig.canvasConfig['canvasWidth'];
    gameCanvas.height = GameConfig.canvasConfig['canvasHeight'];

    GameEngine.start(gameCanvas, GameConfig, function() {
        console.log('GameStarted');
        let player:GameObject = new GameObject(32, 32, GameEngine.createSprite('14589235'));
    });
}

startGame();

/*

--Отображение загрузки
Сцена
Инпуты

*/