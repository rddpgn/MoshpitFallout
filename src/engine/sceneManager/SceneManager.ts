import { Scene } from "./Scene";

export class SceneManager {

    private scenes:Map<string, Scene> = new Map<string, Scene>();
    private currentScene:Scene;

    constructor() {

    }

    public update():void {
        this.currentScene && this.currentScene.update();
    }

    public initScene(sceneName:string):void {
        //clearGameObjects
        this.currentScene = this.scenes.get(sceneName);
        this.currentScene.init();
    }

    public addScene(sceneName:string, scene:Scene):void {
        this.scenes.set(sceneName, scene);
    }
}