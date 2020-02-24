import SelectGroupPlugin from './src/plugins/select-group.ts';
import MultiSelectGroupPlugin from './src/plugins/multi-select-group.ts';

module.exports.HelloWorldPlugin = () => {console.log("Hello World");};
module.exports.AnotherHelloWorldPlugin = () => {console.log("Hello World again");};

module.exports.SelectGroupPlugin = SelectGroupPlugin;
module.exports.MultiSelectGroupPlugin = MultiSelectGroupPlugin;