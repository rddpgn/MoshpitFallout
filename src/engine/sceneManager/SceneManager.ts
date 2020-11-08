import { Scene } from "./Scene";

export class SceneManager {

    private scenes:Map<string, Scene> = new Map<string, Scene>();

    constructor() {

    }

    public initScene(sceneName:string):void {
        //clearGameObjects
        
        this.scenes.get(sceneName).init();
    }

    public addScene(sceneName:string, scene:Scene):void {
        this.scenes.set(sceneName, scene);
    }
}