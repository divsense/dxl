var parser = require("../grammar.js")
var str = '"ok".props/foo/duck(12)  .settings/df("DF")'

var res = parser.parse(str)

console.log(res)
