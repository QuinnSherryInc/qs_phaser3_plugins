import EventEmitter from 'events';
import Phaser from "phaser";

class SelectGroup {
    private _gameObject: any[];
    private _selected: any;
    private _options: Object

    constructor (gameObjects: Array<Phaser.GameObjects.GameObject>, options: Object) {
        this._gameObject = gameObjects;
        this._options = options;
        this._selected = null;

        this._gameObject.forEach(obj => {
            obj.setInteractive().on('pointerup', () => {
               if(obj == this._selected) {
                   this.setUnselect(obj);
                   this._selected = null;
               }
               else {
                    if(this._selected != null) {
                        this.setUnselect(this._selected);
                    }
                    this.setSelected(obj);
                    this._selected = obj;
                    //this.emit('selected', this._selected);
               }
            })
        });
    }

    setSelected (gameObject: Array<Phaser.GameObjects.GameObject>) { }

    setUnselect (gameObject: any) { }

    setSelectAction (handler: any) {
        this.setSelected = handler;
    }

    setUnSelectAction (handler: any) {
        this.setUnselect = handler;
    }

    get selected () {
        return this._selected;
    }
}

export default SelectGroup;