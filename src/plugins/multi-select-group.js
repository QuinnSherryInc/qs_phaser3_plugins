import MultiSelectGroup from "../modules/multi-select-group.ts";

class MultiSelectGroupPlugin extends Phaser.Plugins.ScenePlugin {
	constructor (scene, pluginManager) {
		super(scene, pluginManager);

		// Register our new Game Object type
		pluginManager.registerGameObject('multiselectgroup', this.createMultiSelectGroup);
	}

	createMultiSelectGroup ( gameObjects ) {
		return new MultiSelectGroup( gameObjects, {
			scene: this.scene
		})
	}
};

export default MultiSelectGroupPlugin;
