import * as gameEngineModule from './engine/GameEngine';

const config = {
    canvasId: 'game-canvas',
    canvasWidth: document.body.clientWidth,
    canvasHeight: document.body.clientHeight,
}

const startGame:Function = function():void {
    const gameCanvas:HTMLCanvasElement = document.getElementById(config.canvasId) as HTMLCanvasElement;
    gameCanvas.width = config.canvasWidth;
    gameCanvas.height = config.canvasHeight;

    const gameCanvasContext:CanvasRenderingContext2D = gameCanvas.getContext('2d');
    gameEngineModule.GameEngine.start(gameCanvasContext);
}

startGame();