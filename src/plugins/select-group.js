import SelectGroup from "../modules/select-group.ts";

class SelectGroupPlugin extends Phaser.Plugins.ScenePlugin {
	constructor (scene, pluginManager) {
		super(scene, pluginManager);

		// Register our new Game Object type
		pluginManager.registerGameObject('selectgroup', this.createSelectGroup);
	}

	createSelectGroup (gameObjects) {
		return new SelectGroup(gameObjects, {
			scene: this.scene
		});
	}
};

export default SelectGroupPlugin;
