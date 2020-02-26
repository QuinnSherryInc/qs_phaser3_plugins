import SelectGroup from "../modules/select-group";
import Phaser from "phaser";

class SelectGroupPlugin extends Phaser.Plugins.ScenePlugin {
	constructor (scene : Phaser.Scene, pluginManager : Phaser.Plugins.PluginManager) {
		super(<Phaser.Scene> scene, <Phaser.Plugins.PluginManager> pluginManager);

		// Register our new Game Object type
		pluginManager.registerGameObject('selectgroup', this.createSelectGroup);
	}

	createSelectGroup (gameObjects : Array<Phaser.GameObjects.GameObject>) {
		return new SelectGroup(<Array<Phaser.GameObjects.GameObject>> gameObjects, {
			scene: this.scene
		});
	}
};

export default SelectGroupPlugin;
