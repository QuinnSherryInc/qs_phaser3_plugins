var SelectGroupPlugin = require('./src/plugins/select-group.js');
var MultiSelectGroupPlugin = require('./src/plugins/multi-select-group.js');

module.exports.HelloWorldPlugin = () => {console.log("Hello World");};
module.exports.AnotherHelloWorldPlugin = () => {console.log("Hello World again");};

module.exports.SelectGroupPlugin = SelectGroupPlugin;
module.exports.MultiSelectGroupPlugin = MultiSelectGroupPlugin;