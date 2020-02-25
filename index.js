var SelectGroupPlugin = require('./src/plugins/select-group.ts');
var MultiSelectGroupPlugin = require('./src/plugins/multi-select-group.ts');

module.exports.HelloWorldPlugin = () => {console.log("Hello World");};
module.exports.AnotherHelloWorldPlugin = () => {console.log("Hello World again");};

module.exports.SelectGroupPlugin = SelectGroupPlugin;
module.exports.MultiSelectGroupPlugin = MultiSelectGroupPlugin;

global.HelloWorldPlugin = HelloWorldPlugin;
global.AnotherHelloWorldPlugin = AnotherHelloWorldPlugin;
global.SelectGroupPlugin = SelectGroupPlugin;
global.MultiSelectGroupPlugin = MultiSelectGroupPlugin;