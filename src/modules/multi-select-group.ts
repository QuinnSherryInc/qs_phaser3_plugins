const EventEmitter = require('events');

class MultiSelectGroup extends EventEmitter{
    private _gameObject: any[];
    private _selected: any[];
    private _options: Object

    constructor (gameObjects: [], options: Object) {
        super();
        this._gameObject = gameObjects;
        this._options = options;
        this._selected = [];

        this._gameObject.forEach(obj => {
            obj.setInteractive().on('pointerup', () => {
                let objIndex = this._selected.indexOf(obj)
                if(objIndex == -1) {
                    this._selected.push(obj);
                    this.setSelected(obj);
               }
               else{ 
                    this._selected.splice(obj, 1);
                    this.setUnselect(obj);
               }
            })
        });
    }

    setSelected (gameObject: any) { }

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

export default MultiSelectGroup;